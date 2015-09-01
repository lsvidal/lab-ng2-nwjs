/*
	Static pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('css:dev', function () {
	gulp.src(config.src.css)
		.pipe(gulp.dest(config.dest.base));
});

gulp.task('css:watch', ['css:dev'], function() {
	gulp.watch(config.src.css, ['css:dev']);
});
