var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var WebpackConfig = require('./webpack.config')
var appConfig = require('./config')

var port = appConfig.port

new WebpackDevServer(webpack(WebpackConfig), {
	publicPath: WebpackConfig.output.publicPath,
	hot: true,
}).listen(port, function (err, result) {
	if (err) {
		return console.log(err)
	}
	console.log('Listening on port', port)
})
