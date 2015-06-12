'use strict';

module.exports = function (config) {

	var fs = require('fs');
	var tasksDir = config.tasksDir;
	var files = fs
		.readdirSync(tasksDir)
		.filter(function isValid(file) {
      return (file.indexOf('.') !== 0 && /\.js$/.test(file));
    });

  // load tasks from files
  files.forEach(function(taskname) {
    var task = require('../' + taskname);
		task(config);		
  });
};
