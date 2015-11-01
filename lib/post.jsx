import React from 'react/addons';
import { Link } from 'react-router';

export default React.createClass( {
	getInitialState() {
		return {
			content: 'Loading post...'
		}
	},

	componentDidMount() {
		const siteId = 72257965;
		const { id: postId } = this.props.params;

		fetch( `https://public-api.wordpress.com/rest/v1.1/sites/${ siteId }/posts/${ postId }` )
			.then( response => response.json() )
			.then( data => this.setState( { content: data.content } ) );
	},

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<div dangerouslySetInnerHTML={ { __html: this.state.content } } />
			</div>
		);
	}
} );