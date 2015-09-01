/*
	JS pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('js:dev', function () {
	return gulp.src(config.src.js)
		.pipe(gulp.dest(config.dest.scripts));
});

gulp.task('js:watch', ['js:dev'], function() {
	gulp.watch(config.src.js, ['js:dev']);
});
