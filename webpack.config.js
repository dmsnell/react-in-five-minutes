var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/index.jsx',
	output: {
		path: __dirname,
		filename: 'index.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin( { title: 'React in Five Minutes' } ),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
	],
	resolve: {
		modulesDirectories: [ 'lib', 'node_modules' ],
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'sourcemap'
};