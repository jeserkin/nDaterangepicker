(function() {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('uglify', ['ngAnnotate'], function() {
      plugins.util.log('Uglifying...');

      return gulp.src('./build/*.min.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./build'));
    });
  };
})();