/*
	CSS pipeline.
	*/
'use strict';

var config = require('../../gulp.config'); 
var gulp = require('gulp'); 

gulp.task('process-css', function () {
	gulp.src(config.src.css) 
		.pipe(gulp.dest(config.build.css)); 
});
