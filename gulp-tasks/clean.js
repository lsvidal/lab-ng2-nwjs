

/*
 * Limpa o diretório de scripts gerados e de dependências do Bower.
 */
module.exports = function(config) {

	var gulp = require('gulp');
	
	gulp.task('clean', function() {
  	  var del = require('del');
    	del([config.build.path, config.release.path], function (err) {
      	if (err) {
        	console.error('Failed to delete ' + config.dist.path + ' due to ' + err);
      	}
    	});
	});
}