/*
	Loads NW.js specific dependencies.
	*/
'use strict';

var config = require('../../gulp.config');
var gulp = require('gulp');
var path = require('path');

gulp.task('nw-deps', function () {
	gulp.src(path.join(config.src.path, 'package.json')) 
	.pipe(gulp.dest(config.build.path)); 
});
