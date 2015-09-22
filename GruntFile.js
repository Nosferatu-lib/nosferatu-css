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

        notify: {
            build: {
                options: {
                    message: "Build complete."
                }
            }
        }
    });

    grunt.registerTask('build', [
        'sass:build',
        'notify:build'
    ]);
};