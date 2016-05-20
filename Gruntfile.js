module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.initConfig({
		browserSync: {
   			 bsFiles: {
        		src : ['js/*.js',
  						'*.html'
        		]
   		 		},
    		options: {
        		server: {
           			 baseDir: "./"
        		}
    		}
		}
	});

  grunt.registerTask('default','browserSync');
}