'use strict';
// generated on 2014-11-12 using generator-gulp-foundation 0.0.3

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');


// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
            .pipe($.sass({errLogToConsole: true}))
            .pipe($.autoprefixer('last 1 version'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}))
        .pipe($.size())
        .pipe($.notify("Compilation complete."));
});

gulp.task('scripts', function () {
    return gulp.src('js/**/*.js')
        // .pipe($.jshint())
        // .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe(reload({stream:true}))
        .pipe($.size());
});

gulp.task('watch', ['styles'], function () {

    browserSync({
        proxy: "europaeuropa.dev"
    });
 
    // watch for changes 
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch("scss/**/*.scss", ['styles']);
    gulp.watch("**/*.html").on('change', reload);
});

gulp.task('default', ['watch']);
