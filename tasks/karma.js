(function () {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('karma', function() {
      plugins.util.log('Karma...');
    });
  };
})();