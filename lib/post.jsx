import React from 'react';
import { Link } from 'react-router';
import { decode } from 'ent';
import moment from 'moment';

import { getPost } from 'postStore';

require( 'post.sass' );

export default React.createClass( {
	getInitialState() {
		return {
			post: null
		};
	},

	componentDidMount() {
		getPost( this.props.params.id )
			.then( post => this.setState( { post } ) );
	},

	render() {
		const { post } = this.state;

		return (
			<div>
				<Link to="/">Back</Link>
				{ post ?
					<div className="post-content">
						<h2>{ decode( post.title ) }</h2>
						<h3>Posted by { post.author.name } on { moment( post.date ).format( 'MMMM D' ) }</h3>
						<div dangerouslySetInnerHTML={ { __html: post.content } } />
					</div>
				: <div>Loading post...</div> }
			</div>
		);
	}
} );
