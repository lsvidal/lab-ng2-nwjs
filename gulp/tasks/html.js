/*
	Static pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('html:dev', function () {
	gulp.src(config.src.html)
		.pipe(gulp.dest(config.dest.base));
});

gulp.task('html:watch', ['html:dev'], function() {
	gulp.watch(config.src.html, ['html:dev']);
});
