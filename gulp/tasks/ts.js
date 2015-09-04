/*
	JS pipeline
*/
'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('../../gulp.config');

var tsNodeProject = ts.createProject({
	noImplicitAny: true,
	module: 'commonjs',
	target: 'ES5',
	emitDecoratorMetadata: true,
	experimentalDecorators: true
});

var tsWebkitProject = ts.createProject({
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

gulp.task('webkit:dev', ['libs'], function () {
	var tsResult = gulp.src(config.src.ts.webkit)
									.pipe(ts(tsWebkitProject));

  return tsResult.js.pipe(gulp.dest(config.dest.webkit));
});

gulp.task('node:dev', ['libs'], function () {
	var tsResult = gulp.src(config.src.ts.node)
									.pipe(ts(tsNodeProject));

  return tsResult.js.pipe(gulp.dest(config.dest.node));
});

gulp.task('ts:watch', ['node:dev', 'webkit:dev'], function() {
	gulp.watch(config.src.ts.node, ['node:dev']);
	gulp.watch(config.src.ts.webkit, ['webkit:dev']);
});
