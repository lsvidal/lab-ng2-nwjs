
/*
 * Cleans build and release directories
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');
var del = require('del');

gulp.task('clean', function() {

  del(config.build.path, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.build.path + ' due to ' + err);
    }
  });
  del(config.release.path, function (err) {
    if (err) {
      console.error('Failed to delete ' + config.release.path + ' due to ' + err);
    }
  });
});
