/*
	Static pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:css', function () {
	gulp.src(config.src.css)
		.pipe(gulp.dest(config.dest.base));
});

gulp.task('watch:css', ['dev:css'], function() {
	gulp.watch(config.src.css, ['dev:css']);
});
