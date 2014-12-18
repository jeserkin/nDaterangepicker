module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

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
    },

    "git-describe": {
      run: {
        options: {
          prop: 'gitdescribe'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-git-describe');

  grunt.registerTask('default', []);
  grunt.registerTask('prod', ['git-describe:run', 'uglify']);
};