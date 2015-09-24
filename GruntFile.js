module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        /**
        * Read package.json
        */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Compile SASS
         */
        sass: {
            build: {
                options: {
                    style: 'expanded',
                    noCache: true,
                    sourceMap: true
                },
                files: {
                    'dist/css/nosferatu.css': 'nosferatu.scss'
                }           
            }
        },

        watch: {
            //Automatic compilation of SASS changes
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass:build', 'notify:build']
            }
        },

        notify: {
            build: {
                options: {
                    message: "Build complete."
                }
            }
        }
    });

    grunt.registerTask('dev', [
        'watch:sass'
    ]);

    grunt.registerTask('build', [
        'sass:build',
        'notify:build'
    ]);
};