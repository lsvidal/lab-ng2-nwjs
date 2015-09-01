'use strict';

console.log('Módulo m1 criado');

var contador = 1;

module.exports.getMessage = function() {
  var msg = 'O módulo m1 foi chamado ' + contador + ' vezes';
  contador++;
  return msg;
}
