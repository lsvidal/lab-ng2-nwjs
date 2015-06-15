'use strict';

var src =  './src/';
var build = './build/';
var release = './release';
var conf = {};

conf.src = {
    path: src,
    //ts: src + 'scripts/**/*.ts',
    ts: src + 'scripts/**/*.js',
    css: src + 'styles/**/*.css',
    html: src + '**/*.html'
};

conf.build = {
    path: build,
    allFiles: build + '**',
    pathScripts: build + 'scripts/',
    pathCss: build + 'styles/',
    pathLibs: build + 'scripts/libs/'
};

conf.release = {
    path: release
};

conf.typings = './tools/typings/';
conf.dtsLibs =  conf.typings + 'lib/**/*.ts';
conf.dtsApp = conf.typings + 'App.d.ts';

conf.bowerComponents = './bower_components/';
conf.nodeModules = './node_modules/';
conf.tasksDir = './gulp-tasks/';

conf.nwBuild = {
    version: '0.12.2',
    platforms: ['win32', 'win64'],
    files: conf.build.allFiles,
    buildDir: conf.release.path
};

module.exports = conf;