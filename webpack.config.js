var join = require('path').join

module.exports = {
	context: __dirname,
	entry: './src/Components/Home/index.jsx',

	output: {
		path: join(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
