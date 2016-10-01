(function() {
  'use strict';

  var fs = require('fs');
  var gulp = require('gulp');
  var packageInfo = JSON.parse(fs.readFileSync('./package.json'));
  var paths = {};
  var banner = '/**\n ' +
    '* ' + packageInfo.name + ' ' + packageInfo.version + '\n ' +
    '* @author ' + packageInfo.author.name + '\n ' +
    '* @license ' + packageInfo.license.type + ' ' + packageInfo.license.url + '\n ' +
    '*/\n';

  require('load-gulp-tasks')(gulp, {paths: paths, banner: banner});

  gulp.task('default', ['uglify']);
})();