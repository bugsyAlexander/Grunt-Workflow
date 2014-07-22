module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    } //uglify
  }) //initConfig
} //exports