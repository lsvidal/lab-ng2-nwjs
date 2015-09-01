'use strict';

(function(){
  //window.console.log('App iniciado');
  console.log('App iniciado');
  var i = 1;
  exports.getMessage = function () {
    console.log(typeof __dirname !== 'undefined' ? 'Tenho __dirname' : 'Não tenho __dirname');
    var msg = 'O mainModule foi chamado ' + i + ' vezes';
    i = i + 1;
    console.log('Processo (' + process.pid + ') : getMessage chamado');
    return msg;
  }
})();
