const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

const config = require('./base.config.js');

config.entry = [
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/dev-server',
	'../assets/js/entry'
]; // add hot reload to entry point

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new BundleTracker({filename: 'webpack/stats.json'})
]);

const babelSettings = {
	plugins: [
	['react-transform', {
		transforms: [
			{
				transform: 'react-transform-hmr',
				imports: ['react'],
				locals: ['module']
			}, {
				transform: 'react-transform-catch-errors',
				imports: ['react', 'redbox-react']
			}
		]
	}]
	]
};

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push({
	test: /\.jsx?$/,
	exclude: /node_modules/,
	loaders: ['react-hot', 'babel?'+JSON.stringify(babelSettings)]
});

module.exports = config;
