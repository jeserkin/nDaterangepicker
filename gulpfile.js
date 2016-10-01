(function() {
  'use strict';

  var fs = require('fs');
  var gulp = require('gulp');
  var packageInfo = JSON.parse(fs.readFileSync('./package.json'));
  var paths = {
    base: __dirname,
    build: __dirname + '/build',
    src: __dirname + '/src',
    tests: __dirname + '/test/unit'
  };
  var banner = '/**\n ' +
    '* ' + packageInfo.name + ' ' + packageInfo.version + '\n ' +
    '* @author ' + packageInfo.author.name + '\n ' +
    '* @license ' + packageInfo.license.type + ' ' + packageInfo.license.url + '\n ' +
    '*/\n';

  require('load-gulp-tasks')(gulp, {paths: paths, banner: banner});

  gulp.task('default', ['uglify']);
})();