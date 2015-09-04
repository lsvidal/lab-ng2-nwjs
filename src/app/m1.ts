'use strict';

console.log('Módulo m1 criado');
console.log(typeof __dirname !== 'undefined' ? 'Tenho __dirname' : 'Não tenho __dirname');

var contador = 1;

export function getMessage(): string {
  var msg: string = 'O módulo m1 foi chamado ' + contador + ' vezes';
  contador++;
  return msg;
}
