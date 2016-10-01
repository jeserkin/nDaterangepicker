(function() {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('concat', ['templatecache'], function() {
      plugins.util.log('Concatinating all parts together...');

      return gulp.src(['./src/index.js', './src/*'])
        .pipe(plugins.concat('ndaterangepicker.js'))
        .pipe(plugins.header(options.banner))
        .pipe(gulp.dest('./build'));
    });

    gulp.task('concatMin', ['templatecache'], function() {
      plugins.util.log('Concatinating all parts together for minified file...');

      return gulp.src(['./src/index.js', './src/*'])
        .pipe(plugins.concat('ndaterangepicker.min.js'))
        .pipe(gulp.dest('./build'));
    });
  };
})();