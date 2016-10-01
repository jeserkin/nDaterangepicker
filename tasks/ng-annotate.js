(function() {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('ngAnnotate', ['concat', 'concatMin'], function() {
      plugins.util.log('Annotating everything...');

      return gulp.src('./build/*')
        .pipe(plugins.ngAnnotate())
        .pipe(gulp.dest('./build'));
    });
  };
})();