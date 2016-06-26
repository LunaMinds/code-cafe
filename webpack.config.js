var join = require('path').join

module.exports = {
	context: __dirname,
	entry: join(__dirname, 'src', 'Components', 'Home', 'index.jsx'),

	output: {
		path: join(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
