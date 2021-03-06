module.exports = function (wallaby) {
	var load = require;
	return {
		files: [
			'assets/js/components/*.jsx',
			'assets/js/containers/*.js',
			'assets/js/store/*.js'
		],
		tests: [
			'assets/js/**/tests/**/*.js'
		],
		compilers: {
			'**/*.js*': wallaby.compilers.babel({
				babel: load('babel-core'),
				presets: ['es2015', 'stage-2', 'react']
			})
		},
		preprocessors: {
			'**/*.js': file => require('babel-core').transform(file.content, {sourceMap: true, presets: ['es2015', 'react', 'stage-2']})
		},
		testFramework: 'mocha',
		env: {
			type: 'node'
		},
		setup: function () {
			var jsdom = require('jsdom').jsdom;

			var exposedProperties = [
				'window', 'navigator', 'document'
			];

			global.document = jsdom('');
			global.window = document.defaultView;
			Object.keys(document.defaultView).forEach((property) => {
				if (typeof global[property] === 'undefined') {
					exposedProperties.push(property);
					global[property] = document.defaultView[property];
				}
			});
			global.navigator = {
				userAgent: 'node.js'
			};
		}
	};
};
