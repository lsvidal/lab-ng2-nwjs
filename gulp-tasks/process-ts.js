'use strict';

module.exports = function (config) {
	
	var gulp = require('gulp');
	var browserify = require('gulp-browserify');
	var tsify = require('tsify');
	var rename = require('gulp-rename');
	//var source = require('vinyl-source-stream');

	gulp.task('process-ts', function () {
		return gulp.src('./src/scripts/index.ts', {read: false})
			.pipe(browserify({debug: true, extensions: ['ts'], transform: ['tsify']}))
			.pipe(rename('index.js'))
			.pipe(gulp.dest(config.build.pathScripts));
	});
}
