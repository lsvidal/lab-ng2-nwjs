'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../../gulp.config');

gulp.task('nw:run', ['watch:static'], function () {

	var NwBuilder = require('node-webkit-builder');

	var nw = new NwBuilder(config.nwBuild);

	nw.on('log', function (msg) {
		gutil.log('nw-builder', msg);
	});

	nw.run().catch(function (error) {
		gutil.log('Erros on nw-builder', error);
	});

	return nw;
});
