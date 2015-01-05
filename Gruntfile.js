module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: "/**\n * nDaterangepicker <%=pkg.version%>\n * @author Eugene Serkin\n * @license MIT License http://opensource.org/licenses/MIT\n */\n"
      },
      prod: {
        files: {
          'build/ndaterangepicker.min.js': ['build/ndaterangepicker.js']
        }
      }
    },

    concat: {
      options: {
        banner: "/**\n * nDaterangepicker <%=pkg.version%>\n * @author Eugene Serkin\n * @license MIT License http://opensource.org/licenses/MIT\n */\n"
      },
      prod: {
        src: ['src/*.js'],
        dest: 'build/ndaterangepicker.js'
      }
    },

    karma: {
      options: {
        keepalive: false,
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('prod', ['concat:prod', 'uglify']);
};