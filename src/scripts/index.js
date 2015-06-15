'use strict';

window.onload = function () {	
	var doc = document.getElementById('info');
	var platform = process.platform;
	var arch = process.arch;
	var msg = 'unknown';
	console.log(process.platform);
	console.log(process.arch);
	if (arch === 'x64') {
		if (platform === 'win32') {
			msg = 'Windows 64 bits';
		} else {
			msg = 'Linux 32 bits';
		}
	} else {
		if (platform === 'win32') {
			msg = 'Windows 32 bits';
		} else {
			msg = 'Linux 32 bits';
		}
	}
	doc.innerHTML = 'Current arch is ' + msg;
};
