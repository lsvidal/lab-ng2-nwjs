/*
	HTML pipeline.
	*/
'use strict';

var config = require('../../gulp.config');
var gulp = require('gulp'); 

gulp.task('process-html', function () {
	gulp.src(config.src.html) 
		.pipe(gulp.dest(config.build.path)); 
});
