'use strict';

module.exports = function (config) {
	var gulp = require('gulp');

	gulp.task('dev:static', function () {
		gulp.src(config.src.static)
		.pipe(gulp.dest(config.build.path));
	});
};
