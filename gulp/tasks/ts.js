/*
	JS pipeline
*/
'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('../../gulp.config');

var tsProject = ts.createProject({
	noImplicitAny: true,
	module: 'system',
	target: 'ES5',
	emitDecoratorMetadata: true,
	experimentalDecorators: true
});

gulp.task('libs', function() {
	return gulp.src(config.src.libs)
		.pipe(gulp.dest(config.dest.libs));
});

gulp.task('ts:dev', ['libs'], function () {
	var tsResult = gulp.src(config.src.ts)
									.pipe(ts(tsProject));
								
  return tsResult.js.pipe(gulp.dest(config.dest.scripts));
});

gulp.task('ts:watch', ['ts:dev'], function() {
	gulp.watch(config.src.ts, ['ts:dev']);
});
