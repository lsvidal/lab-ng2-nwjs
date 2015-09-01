
/*
 * Cleans build and release directories
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');
var del = require('del');

gulp.task('clean', function() {

  return del([config.dest.base, config.release.base], function (err) {
    if (err) {
      console.error('Failed to delete: ' + err);
    }
  });
});
