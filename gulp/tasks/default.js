'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('default', ['dev:css', 'dev:html', 'dev:js', 'watch:css', 'watch:html', 'watch:js', 'nw:run']);
