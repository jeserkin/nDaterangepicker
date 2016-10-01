(function () {
  'use strict';

  module.exports = function(gulp, options, plugins) {
    gulp.task('templatecache', function() {
      return gulp.src('./src/**/*.html')
        .pipe(plugins.angularTemplatecache('templates.js', {
          module: 'nDaterangepickerTemplates',
          standalone: true,
          templateHeader: '(function(angular) {\n' +
            '\t\'use strict\';\n\n' +
            '\tangular.module(\'<%= module %>\'<%= standalone %>).run([\'$templateCache\', function($templateCache) {\n',
          templateBody: '\t\t$templateCache.put(\'<%= url %>\',\'<%= contents %>\');',
          templateFooter: '\n\t}]);\n' +
            '})(angular);'
        }))
        .pipe(gulp.dest('./src'));
    });
  };
})();