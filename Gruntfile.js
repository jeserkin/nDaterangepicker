module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {
            src: './src/angular-daterangepicker.js',
            dest: './build/angular-daterangepicker.js'
          }
        ]
      }
    },

    uglify: {
      options: {
        banner: "/**\n * angular-daterangepicker <%=pkg.version%>\n * @author Eugene Serkin\n * @license MIT License http://opensource.org/licenses/MIT\n */\n"
      },
      prod: {
        files: {
          'build/angular-daterangepicker.min.js': ['build/angular-daterangepicker.js']
        }
      }
    },

    karma: {
      options: {
        keepalive: false,
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    },

    "git-describe": {
      run: {
        options: {
          prop: 'gitdescribe'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'copy',
    'uglify'
  ]);
  grunt.registerTask('prod', ['git-describe:run', 'uglify']);
};