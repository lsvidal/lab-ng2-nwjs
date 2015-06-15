'use strict';

module.exports = function (config) {
	
	var gulp = require('gulp');
	var browserify = require('gulp-browserify');
	var tsify = require('tsify');
	var rename = require('gulp-rename');
	//var source = require('vinyl-source-stream');

	gulp.task('process-ts', function () {
		return gulp.src('src/scripts/index.js', {read: false})
			.pipe(browserify({debug: true}))
			.pipe(rename('app.js'))
			.pipe(gulp.dest(config.build.pathScripts));
	});
}
