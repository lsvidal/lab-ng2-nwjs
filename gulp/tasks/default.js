'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('default', ['dev:static', 'dev:js', 'watch:static', 'watch:js', 'nw:run']);
