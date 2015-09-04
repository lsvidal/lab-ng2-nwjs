'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../gulp.config');

gulp.task('nw:run', ['nw:dep', 'css:watch', 'html:watch', 'ts:watch'], function () {

	var NwBuilder = require('nw-builder');

	var nw = new NwBuilder(config.nwBuild);

	nw.on('log', function (msg) {
		gutil.log('nw-builder', msg);
	});

	nw.run().catch(function (error) {
		gutil.log('Erros on nw-builder', error);
	});

	return nw;
});

gulp.task('nw:dep', function () {
	return gulp.src(config.src.nwjs.manifest)
		.pipe(gulp.dest(config.dest.base));
});
