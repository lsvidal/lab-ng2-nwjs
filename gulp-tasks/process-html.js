'use strict';

module.exports = function (config) {
	var gulp = require('gulp');
	
	gulp.task('process-html', function () {
		gulp.src(config.src.html)
		.pipe(gulp.dest(config.build.path));
	});
};
