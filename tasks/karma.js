(function () {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('karma', ['uglify'], function() {
      plugins.util.log('Karma...');

      var server = require('karma').Server;
      var colors = plugins.util.colors;

      var serverInstance = new server({
        configFile: options.paths.base + '/karma.conf.js'
      }, function(exitCode) {
        plugins.util.log('Karma has exited with ' + colors.red(exitCode));
      });
      serverInstance.start();
    });
  };
})();