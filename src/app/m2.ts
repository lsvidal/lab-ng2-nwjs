'use strict';

console.log('Módulo m2 criado');
console.log(typeof __dirname !== 'undefined' ? 'Tenho __dirname' : 'Não tenho __dirname');

var contador = 1;

export function getMessage(): string {
  var msg: string = 'O módulo m2 foi chamado ' + contador + ' vezes';
  contador++;
  return msg;
}
