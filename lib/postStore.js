const siteId = 72257965;
let hasFetchedPosts = false;
let posts = {};

function fetchPosts( fields ) {
	const fieldList = fields ? `?fields=${ fields }` : '';

	return fetch( `https://public-api.wordpress.com/rest/v1.1/sites/${ siteId }/posts/${ fieldList }` )
			.then( response => response.json() )
			.then( data => data.posts )
			.then( postList => {
				postList.forEach( post => {
					posts[ post.ID ] = { ...posts[ post.ID ], ...post, hasFetched: ! fields };
				} );
				return getPostList();
			} );
}

function getPostList() {
	return Object
		.keys( posts )
		.map( id => posts[ id ] )
		.sort( ( a, b ) => Date.parse( b.date ) - Date.parse( a.date ) );
}

export function getPosts() {
	if ( ! hasFetchedPosts ) {
		return fetchPosts( 'ID,title,date' )
			.then( postList => {
				hasFetchedPosts = true;
				setTimeout( fetchPosts, 250 );
				return postList;
			} );
	}

	return Promise.resolve( getPostList() );
}

export function getPost( id ) {
	if ( ! posts[ id ] || ! posts[ id ].hasFetched ) {
		return fetch( `https://public-api.wordpress.com/rest/v1.1/sites/${ siteId }/posts/${ id }` )
			.then( response => response.json() )
			.then( post => {
				posts[ id ] = { ...posts[ id ], ...post, hasFetched: true };
				return post;
			} );
	}

	return Promise.resolve( posts[ id ] );
}