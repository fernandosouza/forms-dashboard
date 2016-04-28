'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'formsDashboard.css',
	bundleFileName: 'formsDashboard.js',
	moduleName: 'metal-formsDashboard',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
