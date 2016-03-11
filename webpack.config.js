'use strict';

const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

const options = {
	context: __dirname,

	entry: './assets/js/entry', // entry point into app

	output: {
		path: path.resolve('./assets/bundles/'),
		filename: '[name].js'
	},

	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}) // extract information for django to load the right bundle
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel' // transform jsx and es6 into js
			}
		]
	}
};

module.exports = options;
