(function() {
  'use strict';

  module.exports = function(config, specificOptions) {
    config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      autoWatch: true,
      logLevel: config.LOG_INFO,
      logColors: true,
      browsers: ['PhantomJS'],
      browserDisconnectTimeout: 10000,
      browserDisconnectTolerance: 2,
      browserNoActivityTimeout: 30000,
      captureTimeout: 5000,
      singleRun: true,
      client: {
        captureConsole: true,
        mocha: {
          bail: true
        }
      }
    });

    if (process.env.TRAVIS) {
      var buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';

      config.logLevel = config.LOG_DEBUG;
      // Karma (with socket.io 1.x) buffers by 50 and 50 tests can take a long time on IEs;-)
      config.browserNoActivityTimeout = 120000;

      // Debug logging into a file, that we print out at the end of the build.
      config.loggers.push({
        type: 'file',
        filename: process.env.LOGS_DIR + '/' + (specificOptions.logFile || 'karma.log')
      });
    }

    config.set({
      files: [
        'node_modules/angular/angular.js',
        'node_modules/moment/moment.js',

        'node_modules/angular-mocks/angular-mocks.js',

        'build/ndaterangepicker.js',
        'test/**/*.spec.js'
      ],

      // use dolts reporter, as travis terminal does not support escaping sequences
      // possible values: 'dots', 'progress', 'junit', 'teamcity', 'mocha'
      // CLI --reporters progress
      reporters: ['mocha', 'dots', 'junit'],

      // reporter options
      mochaReporter: {
        output: 'full'
      },

      junitReporter: {
        outputDir: 'test-results',
        outputFile: 'karma.xml'
      },

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      // CLI --colors --no-colors
      colors : true
    });
  };
})();