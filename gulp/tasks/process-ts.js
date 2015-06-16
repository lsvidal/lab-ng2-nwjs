/*
	TS pipeline.
	*/
'use strict';

var config = require('../../gulp.config');
var gulp = require('gulp'); 
var gutil = require('gulp-util');
var browserify = require('browserify'); 
var watchify = require('watchify');
var tsify = require('tsify');
var source = require('vinyl-source-stream'); 
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var debug = require('gulp-debug');

gutil.log(watchify.args);

var options = assign({debug: true}, watchify.args);
var bundler = watchify(browserify(options))
								.add(config.src.appMain)
								.plugin('tsify', {
                          target: 'ES5',
                          //module: 'system', // automatic
                          //declarationFiles: false,
                          //noExternalResolve: true,
                          //noLib: false,
                          noImplicitAny: true
                          //emitDecoratorMetadata: true,
                          //declaration: false,
                          //sourceMap: true,
                          //listFiles: true,
                          //typescript: require('typescript') // Used to exchange the default version of Typescript compiler
                                                             // by the version set in devDependnecies in package.json
                })
								.on('update', bundle)
								.on('log', gutil.log)
								.on('error', gutil.log.bind(gutil, 'Browserify error'));


gulp.task('process-ts', ['ts-gen-refs'], bundle);

function bundle() {
	return bundler.bundle()
		//.pipe(debug({title: 'd.ts generation:'}))
		.pipe(source('app.js')) 
		//.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file 
		// Add transformation tasks to the pipeline here.
    //.pipe(sourcemaps.write('./')) // writes .map file
		.pipe(gulp.dest(config.build.pathScripts));
}
