'use strict';

(function(){
  //window.console.log('App iniciado');
  console.log('App iniciado');
  var i = 1;
  exports.getMessage = function () {
    var msg = 'Essa função foi chamada ' + i + ' vezes';
    i = i + 1;
    console.log('Processo (' + process.pid + ') : getMessage chamado');
    return msg;
  }
})();
