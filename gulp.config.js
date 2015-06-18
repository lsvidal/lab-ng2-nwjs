'use strict';

var src =  './src/';
var build = './build/';
var release = './release';
var conf = {};

conf.src = {
    path: src,
    tsMain: src + 'scripts/index.ts',
    ts: src + 'scripts/**/*.ts',
    css: src + 'styles/**/*.css',
    html: src + '**/*.html'
};

conf.build = {
    path: build,
    jsBundle: 'app.bundle.js',
    scripts: build + 'scripts/',
    css: build + 'styles/'
};

conf.release = {
    path: release
};

conf.typings = './tools/typings/';
conf.dtsLibs =  conf.typings + 'lib/**/*.ts';
conf.dtsApp = conf.typings + 'app.d.ts';

conf.nodeModules = './node_modules/';

conf.nwBuild = {
    version: '0.12.2',
    platforms: ['win32', 'win64'],
    files: build + '**',
    buildDir: conf.release.path
};

conf.browserify = {
    debug: true,
    entries: conf.src.tsMain,
    extensions: ['.ts']
};

conf.tsify = {
     target: 'ES5',
     declarationFiles: true,
     noExternalResolve: true,
     noLib: false,
     noImplicitAny: true,
     listFiles: true,
     typescript: require('typescript') // Used to exchange the default version of Typescript compiler
                                       // by the version set in devDependnecies in package.json    
};

module.exports = conf;