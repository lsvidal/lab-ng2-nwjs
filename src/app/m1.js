'use strict';

console.log('Módulo m1 criado');
console.log(typeof __dirname !== 'undefined' ? 'Tenho __dirname' : 'Não tenho __dirname');

var contador = 1;

module.exports.getMessage = function() {
  var msg = 'O módulo m1 foi chamado ' + contador + ' vezes';
  contador++;
  return msg;
}
