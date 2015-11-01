import React from 'react/addons';
import decode from 'ent/decode';
import { Link } from 'react-router';

export default React.createClass( {
	getInitialState() {
		return { posts: [] }
	},

	componentDidMount() {
		const siteId = 72257965;

		fetch( `https://public-api.wordpress.com/rest/v1.1/sites/${ siteId }/posts?fields=ID,title` )
			.then( response => response.json() )
			.then( response => response.posts )
			.then( posts => this.setState( { posts } ) );
	},

	render() {
		return (
			<div>
				<ul>
				{ this.state.posts.map( post => (
					<li><Link to={ `/posts/${ post.ID }` }>{ decode( post.title ) }</Link></li>
				) ) }
				</ul>
			</div>
		);
	}
} );