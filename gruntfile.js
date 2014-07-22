module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
    	dev: {
    		options: {
    			config: 'config.rb'
    		} // options
    	} // development
    }, // compass
    watch: {
    	scripts : {
    		files: ['_/components/js/*.js'],
    		tasks: ['uglify']
    	}, // script
    	sass: {
    		files: ['_/components/sass/*.scss'],
    		tasks: ['compass:dev']
    	} // sass
    } // watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports