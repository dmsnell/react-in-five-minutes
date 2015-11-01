var webpack = require('webpack');

module.exports = {
	entry: {
		App: [
			'webpack-dev-server/client?http://localhost:4001/',
			'webpack/hot/only-dev-server',
			__dirname + '/index.jsx'
		]
	},
	output: {
		filename: 'index.min.js',
		path: __dirname,
		publicPath: 'http://localhost:4001/'
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
	],
	resolve: {
		modulesDirectories: [ 'lib', 'node_modules' ],
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'sourcemap'
};