
if (typeof __dirname !== 'undefined') {
  console.log('__dirname: ' + __dirname);
}

console.log('Processo (' + process.pid + ') : Criando a task para monitorar alterações nos arquivos');

var Gaze = require('gaze');
var gaze = new Gaze('**/*');

gaze.on('error', function(error) {
  console.error('Gaze: ' + error);
});

gaze.on('ready', function(watcher) {
  console.log('Gaze: início da observação dos arquivos');
});

// all serve para receber added, deleted ou changed
gaze.on('all', function(event, filepath) {
  console.log('Gaze (' + event + ') : ' + filepath);
  if (window.location) {
    scanModules();
    console.log('Processo (' + process.pid + ') : Recarregando a página');
    window.location.reload();
  }
});

gaze.on('end', function() {
  console.log('Gaze: parou de observar todos os arquivos');
});

export function monitor() {
  console.log('livereload');
}

function scanModules() {

  var reg = new RegExp('m2.js' + '$');

  for (var i in global.require.cache) {
    if (reg.test(i)) {
      console.log('Removendo "m2.js"');
      delete global.require.cache[i];
    }
  }

  for (var i in global.require.cache) {
    console.log('- ' + i + ' : ' + global.require.cache[i]);
  }
}
