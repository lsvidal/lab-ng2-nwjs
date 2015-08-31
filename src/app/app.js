'use strict';

(function(){
  //window.console.log('App iniciado');
  var i = 5;
  exports.getMessage = function () {
    var msg = 'Call ' + i;
    i = i + 1;
    return msg
  }
})();
