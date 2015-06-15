'use strict';

module.exports = function(config) {
	var gulp = require('gulp');

	gulp.task('watch', function() {
    gulp.watch([config.src.ts], ['process-ts']);
    gulp.watch([config.src.html], ['process-html']);
    gulp.watch([config.src.css], ['process-css']);
	});
}