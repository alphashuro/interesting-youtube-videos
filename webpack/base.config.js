const path = require('path');

module.exports = {
	context: __dirname,

	entry: '../assets/js/entry',

	output: {
		path: path.resolve('assets/bundles/'),
		filename: '[name]-[hash].js'
	},

	plugins: [],

	module: {
		loaders: [
			{
				test: /\.s[ac]ss$/,
				loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	}
};
