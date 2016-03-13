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
		loaders: []
	}
};
