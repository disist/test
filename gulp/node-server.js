'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function (options) {
  gulp.task('node-server', function () {
    nodemon({
      script: options.serverSrc + '/init.js',
      ext: 'js',
      watch: [options.serverSrc + '/**/*.js'],
      env: {
        'NODE_ENV': 'development'
      }
    });
  });
};
