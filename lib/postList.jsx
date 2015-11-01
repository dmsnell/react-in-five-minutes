import React from 'react';
import { Link } from 'react-router';
import { decode } from 'ent';

import { getPosts } from 'postStore';

require( 'postList.sass' );

export default React.createClass( {
	getInitialState() {
		return {
			posts: []
		}
	},

	componentDidMount() {
		getPosts()
			.then( posts => this.setState( { posts } ) );
	},

	render() {
		return (
			<div className="post-list">
				<ul>
					{ this.state.posts.map( post => (
						<li key={ `post-${ post.ID }` }><Link to={ `/posts/${ post.ID }` }>{ decode( post.title ) }</Link></li>
					) ) }
				</ul>
			</div>
		);
	}
} );