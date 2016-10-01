(function() {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('bower', function() {
      plugins.util.log('BOWER TASK');
    });
  };
})();