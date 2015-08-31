'use strict';

console.log('funcionando');
var process = require('process');
var doc = document.getElementById('info');
var platform = process.platform;
var arch = process.arch;
var msg = 'unknown';
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
doc.innerHTML = 'Current arch is ' + msg + ' : ' + process.mainModule.exports.getMessage() + ' process version: ' + process.version;
