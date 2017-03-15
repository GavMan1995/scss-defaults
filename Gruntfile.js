module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
        options: {
          noCache: true,
          style: 'compressed',
          sourcemap: 'none'
        },

				files: {'app/application.css' : 'styles.scss'}
			}
		},

		connect: {
      server: {
        options: {
          port: 9000,
          hostname: '*',
          base: 'app/'
        }
      }
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

		surge: {
			'Your Project Name': {
				options: {
					project: 'app/',
					domain: 'gavman-styles.surge.sh'
				}
			}
		},
		
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-surge');
	grunt.loadNpmTasks('grunt-contrib-connect'); 
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('deploy', ['sass', 'surge']);
}
