// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      //'test/lib/jquery.min.js',
      //'test/lib/helpers.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular-route.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular-animate.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    autoWatch: true,
    browsers: ['PhantomJS']
  });
};