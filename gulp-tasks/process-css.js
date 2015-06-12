'use strict';

module.exports = function (config) {
	var gulp = require('gulp');
	
	gulp.task('process-css', function () {
		gulp.src(config.src.css)
		.pipe(gulp.dest(config.build.pathCss));
	});
};
