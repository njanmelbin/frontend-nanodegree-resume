module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-responsive-images');
	grunt.initConfig({
		browserSync: {
   			 bsFiles: {
        		src : ['js/*.js',
  						'*.html',
                        'css/*.css'
        		]
   		 		},
    		options: {
        		server: {
           			 baseDir: "./"
        		}
    		}
		},
    responsive_images:{
            dev :{
                    
                    options:{
                        engine : "im",
                        newFilesOnly :false,
                        sizes :[{
                            name: "small",
                            width: 150,
                            height: 100,
                            aspectRatio:false
                        },{
                            name: "medium",
                            width: 350,
                            height: 350,
                            upscale: true,
                            aspectRatio: false

                        },{
                            name :"large",
                            upscale: true,
                            width: 1000,
                            height: 600,
                            aspectRatio:false

                        }]
                    },
                    files :[{
                        expand: true,
                        src : ['img/**/*.{gif,jpg,png}'],
                        cwd : './',
                        dest: 'images/'
                    }]
            }
        }

	});

  grunt.registerTask('default','browserSync','responsive_images');
}