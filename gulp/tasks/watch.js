/*
	Watch task for HTML and CSS pipelines.

	TS pipeline is handled separetely.
	*/
'use strict';

var config = require('../../gulp.config'); 
var gulp = require('gulp'); 

gulp.task('watch', function() {
//	gulp.watch([config.src.ts], ['process-ts']); 
	gulp.watch([config.src.html], ['process-html']); 
	gulp.watch([config.src.css], ['process-css']); 
});
