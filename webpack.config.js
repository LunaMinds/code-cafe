var join = require('path').join
var webpack = require('webpack')
var appConfig = require('./config')

var port = appConfig.port

module.exports = {
	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://0.0.0.0:'.concat(port),
		'webpack/hot/only-dev-server',
		join(__dirname, './src/Components/index.jsx'),
	],

	devServer: {
		inline: true,
		hot: true,
		contentBase: './dist',
		port: port,
	},

	output: {
		path: join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'],
			},
		],
	},
}
