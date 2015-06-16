/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');
var debug = require('gulp-debug');
var inject = require('gulp-inject');

gulp.task('ts-gen-refs', function () {
    var sources = gulp.src([config.src.ts], {read: false});
    return gulp.src(config.dtsApp)
            .pipe(debug({title: 'd.ts generation:'}))
            .pipe(inject(sources, {
                starttag: '//{',
                endtag: '//}',
                transform: function (filepath) {
                    return '/// <reference path="../..' + filepath + '" />';
                }
            }))
            .pipe(gulp.dest(config.typings));
});