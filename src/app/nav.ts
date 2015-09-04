'use strict';

var process = require('process');

console.log('Processo (' + process.pid + ') : Renderizando a página');
console.log(typeof __dirname !== 'undefined' ? 'Tenho __dirname' : 'Não tenho __dirname');

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

function endsWith(s1: string, s2: string): boolean {
  return s1.match(s2 + '$')[0] == s2;
}

var m1 = require('./scripts/m1');
var m2 = require('./scripts/m2');

doc.innerHTML = '<p>A arquitetura é ' + msg + '</p><p>' + m1.getMessage() + '</p><p>' + m2.getMessage() + '</p>';
for (var i in global.require.cache) {
  if (endsWith(i, 'm2.js')) {
    console.log('Achei');
    delete global.require.cache[i];
  }
}
for (var i in global.require.cache) {
  console.log('- ' + i + ' : ' + global.require.cache[i]);
}
