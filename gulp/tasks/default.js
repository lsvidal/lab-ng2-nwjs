
/*
	Define default task.
	*/
'use strict';

var gulp = require('gulp');
gulp.task('default', ['process-html', 'process-css', 'process-ts', 'watch', 'nw-run']);
