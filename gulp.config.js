'use strict';

var src =  './src/';
var build = './build/';
var release = './release';
var conf = {};

conf.src = {
    path: src,
    ts: src + 'app/**/*.ts',
    js: src + 'app/**/*.js',
    static: src + 'static/**/*.*'
};

conf.build = {
    path: build,
    allFiles: build + '**',
    scripts: build + 'scripts/'
};

conf.release = {
    path: release
};

conf.typings = './tools/typings/';
conf.dtsLibs =  conf.typings + 'lib/**/*.ts';
conf.dtsApp = conf.typings + 'App.d.ts';

conf.nwBuild = {
    version: '0.12.3',
    platforms: ['win32', 'win64'],
    files: conf.build.allFiles,
    buildDir: conf.release.path
};

module.exports = conf;
