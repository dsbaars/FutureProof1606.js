import gulp from 'gulp';
import path from 'path';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';

let reload = browserSync.reload();

gulp.task('default', ['browser-sync'], function() {

});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: [
      'public/app/*.js',
      'public/javascripts/*.js',
      'public/**/*.css',
      'public/**/*.html'
    ]
    ,
    serveStatic: [
      'public/'
    ],
    browser: "google chrome",
    port: 7000
  });
});

gulp.task('nodemon', function (cb) {
  let started = false;
  return nodemon({
    script: 'bin/www',
    exec: './node_modules/.bin/babel-node',
    watch: [
      "controllers/**/*.js",
      "views/**/*.ejs",
      "app.js"
    ]
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  }).on('restart', function() {
    browserSync.reload();
  });
});
