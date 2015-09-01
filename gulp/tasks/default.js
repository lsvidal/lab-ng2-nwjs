'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('default', ['css:dev', 'html:dev', 'js:dev', 'css:watch', 'html:watch', 'js:watch', 'nw:run']);
