module.exports = function(grunt){

    // Configure main project setting
    grunt.initConfig({

        // Basic setting and info about our plugin
        pkg: grunt.file.readJSON("package.json"),

        // Name of plugin (plugin name without the "grunt-contrib")
        // min css
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'html/css/',
                    src: ['*.css', '*.min.css'],
                    dest: 'html/css/',
                    ext: '.min.css'
                }]
            }
        },
        // min js
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'html/js/',
                    src: ['**/*.js'],
                    dest: 'js'
                }],
                files: {
                    'html/js/toggle.min.js': ['html/js/toggle.js']
                }
            }
        }
    })


    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    // Do the task
    grunt.registerTask('default', ['cssmin', 'uglify'])
}