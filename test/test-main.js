/* Created by frank on 14-3-27. */
/* global GLOBAL */

var allTestFiles = [];
var TEST_REGEXP = /unit\.js$/i;

var pathToModule = function (path) {
  return path.replace(/^\/base\/test\//, '../../test/').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src/scripts/',

  // the paths should be the same as the paths in src/scripts/config.js
  paths: {
    jquery: 'bower_files/jquery/dist/jquery'
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
