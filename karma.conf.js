/*jslint node: true */
"use strict";

/**
 * Karma config file
 * 
 * http://karma-runner.github.io/0.8/config/configuration-file.html
 */
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: [ 'jasmine' ],
    files: [
      'dist/app.min.js',
      'dist/vendor/vendor.min.js',
      'dist/**/*html',
      'tests/**/*.js',
    ],
    preprocessors: {
      'app/templates/*.html': 'ng-html2js'
    },
    reporters: [ 'progress' ],
    colors: true,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ]
  });
};