
/*
 * Cleans build and release directories
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');
var del = require('del');

gulp.task('clean', function() {

  del(config.dest.base, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.dest.base + ' due to ' + err);
    }
  });
  del(config.release.base, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.release.base + ' due to ' + err);
    }
  });
});
