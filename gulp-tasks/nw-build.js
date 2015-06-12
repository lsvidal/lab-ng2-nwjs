'use strict';

module.exports = function (config) {

	var gulp = require('gulp');

	gulp.task('nw-build', ['nw-deps'], function () {
		var NwBuilder = require('node-webkit-builder');
		var gutil = require('gulp-util');

		var nw = new NwBuilder(config.nwBuild);

		nw.on('log', function (msg) {
			gutil.log('nw-builder', msg);
		});

		nw.build().catch(function (error) {
			gutil.log('Erros on nw-builder', error);
		});

		return nw;
	});
}
