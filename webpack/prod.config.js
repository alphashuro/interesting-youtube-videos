const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

const config = require('./base.config.js');

config.output.path = path.resolve('assets/dist');

config.plugins = config.plugins.concat([
	new BundleTracker({filename: 'webpack/stats-prod.json'}),

	// removes a lot of debugging code in React
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),

	// keeps hashes consistent between compilations
	new webpack.optimize.OccurenceOrderPlugin(),

	// minify js
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	})
]);

// Add a loader for JSX files
config.module.loaders.push({
	test: /\.jsx?$/,
	exclude: /node_modules/,
	loader: 'babel'
});

module.exports = config;
