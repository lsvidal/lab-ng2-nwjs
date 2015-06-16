'use strict';

var requireDir = require('require-dir');
requireDir('./gulp/tasks', {recurse: true});

 /*
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

    return builder.build('angular2/angular2', config.dist.pathLibs + 'angular2.js', {minify: true, sourceMaps: true});
});
*/

//gulp.task('static-assets', ['angular2', 'angular2-dependencies', 'bower-dependencies']);

//gulp.task('default', ['static-assets', 'process-html', 'process-css', 'compile-ts', 'watch', 'livereload']);
