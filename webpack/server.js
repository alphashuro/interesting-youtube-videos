var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./dev.config.js');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	inline: true
}).listen(3000, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:3000');
});