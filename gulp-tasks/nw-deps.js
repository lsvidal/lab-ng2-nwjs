'use strict';

module.exports = function (config) {
	var gulp = require('gulp');
	var path = require('path');

	gulp.task('nw-deps', function () {		
		gulp.src(path.join(config.src.path, 'package.json'))
		.pipe(gulp.dest(config.build.path));
	});
};
