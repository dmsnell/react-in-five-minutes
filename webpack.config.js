var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './index.jsx',
	output: {
		App: [
			'webpack-dev-server/client?http://localhost:4001',
			'webpack/hot/only-dev-server',
			'./index.jsx'
		]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'react-hot', 'babel-loader' ]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				loaders: [ 'style', 'css', 'sass' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin( { title: 'React in Five Minutes' } ),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin( {
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
	],
	resolve: {
		modulesDirectories: [ '', 'lib', 'node_modules' ],
		extensions: [ '', '.js', '.jsx' ]
	},
	devtool: 'sourcemap'
};
