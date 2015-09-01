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
    }
};

conf.dest = {
    base: dest,
    all: dest + '**',
    scripts: dest + 'scripts/',
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
