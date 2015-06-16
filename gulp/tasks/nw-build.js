/*
	Build app for production.
	*/
	
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');
var nwBuilder = require('node-webkit-builder'); 
var gutil = require('gulp-util'); 

gulp.task('nw-build', ['nw-deps'], function () {

	var nw = new nwBuilder(config.nwBuild); 
	nw.on('log', function (msg) {
		gutil.log('nw-builder', msg); 
	}); 

	nw.build().catch(function (error) {
		gutil.log('Erros on nw-builder', error); 
	}); 

	return nw; 
});
