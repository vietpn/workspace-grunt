module.exports = function(grunt){

    // Configure main project setting
    grunt.initConfig({

        // Basic setting and info about our plugin
        pkg: grunt.file.readJSON("package.json"),

        // Name of plugin (plugin name without the "grunt-contrib")
        cssmin: {
            combine: {
                files: {
                    'html/css/main.css': ['html/css/content.css', 'html/css/sidebar.css']
                }
            }
        },
        uglify: {
            dist: {
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