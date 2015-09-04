'use strict';

var src =  './src/';
var dest = './build/';
var release = './release';
var conf = {};

conf.src = {
    base: src,
    ts: src + 'app/**/*.ts',
    js: src + 'app/**/*.js',
    html: src + 'static/**/*.html',
    css: src + 'static/**/*.css',
    nwjs: {
      manifest: src + 'static/package.json'
    },
    libs: [
      'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/angular2/bundles/angular2.min.js',
      'node_modules/systemjs/dist/system-csp-production.js'
    ],
    typings: 'node_modules/angular2/bundles/typings/angular2/angular2.d.ts'
};

conf.dest = {
    base: dest,
    all: dest + '**',
    scripts: dest + 'scripts/',
    libs: dest + 'scripts/libs/',
    styles: dest + 'styles/'
};

conf.release = {
    base: release
};

conf.typings = './tools/typings/';
conf.dtsLibs =  conf.typings + 'lib/**/*.ts';
conf.dtsApp = conf.typings + 'App.d.ts';

conf.nwBuild = {
    version: '0.12.3',
    platforms: ['win32', 'win64'],
    files: conf.dest.all,
    buildDir: conf.release.base
};

module.exports = conf;
