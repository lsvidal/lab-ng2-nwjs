
/*
 * Limpa o diretório de scripts gerados e de dependências do Bower.
 */
'use strict';

var gulp = require('gulp');
var config = require('../../gulp.config');

gulp.task('clean', function() {
  var del = require('del');
  del([config.build.path, config.release.path], function (err) {
    if (err) {
      console.error('Failed to delete ' + config.dist.path + ' due to ' + err); 
    } 
  });
});
