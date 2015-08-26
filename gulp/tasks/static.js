/*
	Static pipeline
*/
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('dev:static', function () {
	gulp.src(config.src.static)
		.pipe(gulp.dest(config.build.path));
});

gulp.task('watch:static', ['dev:static'], function() {
	gulp.watch(config.src.static, ['dev:static']);
});
