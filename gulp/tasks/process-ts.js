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
var buffer = require('gulp-debug');

gutil.log(watchify.args);

var options = assign(config.browserify, watchify.args);
gutil.log(options);
var bundler = watchify(browserify(options))
								.plugin('tsify', config.tsify)
								.on('log', gutil.log)
								.on('update', function(ids) {
									gutil.log('Changed ids: ' + ids);
									return bundle();
								});


gulp.task('process-ts', ['ts-gen-refs'], bundle);

function bundle() {
	return bundler
		.bundle()
		// Captura os eventos de erro para não quebrar a execução
		.on('error', gutil.log.bind(gutil, 'Browserify error'))
		//.pipe(debug({title: 'd.ts generation:'}))
		.pipe(source(config.build.jsBundle)) // defines the name of the stream
		.pipe(buffer)
		.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file 
		// Add transformation tasks to the pipeline here.
		// Writes .map file
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: './'}))
		.pipe(gulp.dest(config.build.scripts));
}
