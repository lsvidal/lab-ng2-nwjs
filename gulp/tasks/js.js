/*
	JS pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:js', function () {
	gulp.src(config.src.js)
		.pipe(gulp.dest(config.dest.scripts));
});

gulp.task('watch:js', ['dev:js'], function() {
	gulp.watch(config.src.js, ['dev:js']);
});
