import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';

import PostList from 'postList';
import Post from 'post';

const App = React.createClass( {
	render() {
		return (
			<div>
				<h1>React in Five Minutes</h1>
				{ this.props.children }
			</div>
		);
	}
} );

React.render( (
	<Router>
		<Route path="/" component={ App }>
			<IndexRoute component={ PostList } />
			<Route path="/posts/:id" component={ Post } />
		</Route>
	</Router>
), document.body );