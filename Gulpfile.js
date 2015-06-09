'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename');

var Config = require('./gulpfile.config');

var config = new Config();

gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        root: config.dist.path,
        port: 9000
    });
});

gulp.task('livereload', ['webserver'], function () {
    var files = [ config.dist.allFiles ];
    gulp.src(files)
        .pipe(watch(files))
        .pipe(connect.reload());
});

/*
 * Moves only the necessary dependencys handled by Bower to scripts folder
 */
gulp.task('bower-dependencies', function () {
   
    var mainBowerFiles  = require('main-bower-files');
    var bowerNormalizer = require('gulp-bower-normalize');

    return gulp.src(mainBowerFiles(), {base: config.bowerComponents})
        .pipe(bowerNormalizer({bowerJson: './bower.json'}))
        .pipe(rename(function (path) {
            //console.log(path);
            if (path.dirname.match(/font$/)) {
                //console.log('font');
                path.dirname = 'font';
            } else if (path.dirname.match(/js$/)) {
                //console.log('js');
                path.dirname = '';
            } else if (path.dirname.match(/map$/)) {
                //console.log('map');
                path.dirname = '';
            } else if (path.dirname.match(/css$/)) {
                //console.log('css');
                path.dirname = 'css';
            }
        }))
        .pipe(gulp.dest(config.dist.pathLibs));
});

gulp.task('angular2-dependencies', function () {
    var libs = [
        config.nodeModules + 'angular2/node_modules/zone.js/zone.js',
        config.nodeModules + 'angular2/node_modules/zone.js/long-stack-trace-zone.js'
    ];
    return gulp.src(libs)
            .pipe(gulp.dest(config.dist.pathLibs));
});

gulp.task('angular2', function () {

    var buildConfig = {
        paths: {
            "angular2/*": "./node_modules/angular2/es6/prod/*.es6",
            "rx": "./node_modules/angular2/node_modules/rx/dist/rx.js"
        }
    };

    var Builder = require('systemjs-builder');
    var builder = new Builder(buildConfig);

    return builder.build('angular2/angular2', config.dist.pathLibs + 'angular2.js', {/*minify: true,*/ sourceMaps: true});
});

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
gulp.task('gen-ts-refs', function () {
    var sources = gulp.src([config.src.ts], {read: false});
    return gulp.src(config.dtsApp)
            .pipe(debug({title: 'd.ts generation:'}))
            .pipe(inject(sources, {
                starttag: '//{',
                endtag: '//}',
                transform: function (filepath) {
                    return '/// <reference path="../..' + filepath + '" />';
                }
            }))
            .pipe(gulp.dest(config.typings));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', ['gen-ts-refs'], function () {
    var sourceTsFiles = [config.src.ts,                       //path to typescript files
                         config.dtsLibs, //reference to library .d.ts files
                         config.dtsApp];     //reference to app.d.ts files

    var tsResult = gulp.src(sourceTsFiles)
                      .pipe(debug({title: 'ts compiled:'}))
                      .pipe(sourcemaps.init())
                      .pipe(tsc({
                          target: 'ES5',
                          module: 'system',
                          declarationFiles: false,
                          noExternalResolve: true,
                          noLib: false,
                          noImplicitAny: true,
                          emitDecoratorMetadata: true,
                          declaration: false,
                          sourceMap: true,
                          listFiles: true,
                          typescript: require('typescript') // Used to exchange the default version of Typescript compiler
                                                             // by the version set in devDependnecies in package.json
                      }));

        tsResult.dts.pipe(gulp.dest(config.dist.pathScripts));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.dist.pathScripts));
});

gulp.task('process-html', function() {
    gulp.src(config.src.html)
        .pipe(gulp.dest(config.dist.path));
});

gulp.task('process-css', function() {
    gulp.src(config.src.css)
        .pipe(gulp.dest(config.dist.pathCss));
});

gulp.task('watch', function() {
    gulp.watch([config.src.ts], ['compile-ts']);
    gulp.watch([config.src.html], ['process-html']);
    gulp.watch([config.src.css], ['process-css']);
});

/*
 * Limpa o diretório de scripts gerados e de dependências do Bower.
 */
gulp.task('clean', function() {
    var del = require('del');
    del([config.dist.path], function (err) {
      if (err) {
        console.error('Failed to delete ' + config.dist.path + ' due to ' + err);
      }
    });
});

gulp.task('static-assets', ['angular2', 'angular2-dependencies', 'bower-dependencies']);

gulp.task('default', ['static-assets', 'process-html', 'process-css', 'compile-ts', 'watch', 'livereload']);
