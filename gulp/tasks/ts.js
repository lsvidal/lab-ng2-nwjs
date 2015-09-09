/*
	JS pipeline
*/
'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
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
	module: 'amd',
	// module: 'commonjs',
	// module: 'system',
	target: 'ES5',
	emitDecoratorMetadata: true,
	experimentalDecorators: true
});

gulp.task('libs', function() {
	return gulp.src(config.src.libs)
		.pipe(gulp.dest(config.dest.libs));
});

gulp.task('webkit:dev', ['libs'], function () {
	return gulp.src(config.src.ts.webkit)
		.pipe(sourcemaps.init())
		.pipe(ts(tsWebkitProject))
		.js
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest.webkit));
});

gulp.task('node:dev', ['libs'], function () {
	return gulp.src(config.src.ts.node)
		.pipe(sourcemaps.init())
		.pipe(ts(tsNodeProject))
		.js
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest.node));
});

gulp.task('ts:watch', ['node:dev', 'webkit:dev'], function() {
	gulp.watch(config.src.ts.node, ['node:dev']);
	gulp.watch(config.src.ts.webkit, ['webkit:dev']);
});
