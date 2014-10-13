module.exports = function(grunt) {
  ['grunt-contrib-watch',
   'grunt-contrib-less'].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      less: {
        files: 'styles/*.less',
        tasks: 'less'
      }
    },
    less: {
      production: {
        options: {
          cleancss: true,
          compress: true
        },
        files: {
          'styles/bundle.min.css': ['styles/main.less']
        }
      }
    }
  });

  grunt.registerTask('build', ['less']);
  grunt.registerTask('dev', ['watch']);
};
