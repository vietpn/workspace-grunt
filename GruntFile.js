module.exports = function(grunt){

    // Configure main project setting
    grunt.initConfig({

        // Basic setting and info about our plugin
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            scripts: {
                files: ['html/js/*.js', 'html/css/*.css'],
                tasks: ['cssmin', 'uglify']
            },
        },

        // Name of plugin (plugin name without the "grunt-contrib")
        //unused css: generating CSS files containing only those styles used in your project.
        uncss: {
            dist: {
                files: {
                    'html/css/style.css': ['html/index.html']
                }
            }
        },

        // sass
        sass: {
            dist: {
                files: {
                    'html/css/content.sass.css' : 'html/css/content.css'
                }
            }
        },
        // concat
        concat: {
            options: {
                separator: ';',
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['html/js/toggle.js', 'html/js/toggle1.js'],
                dest: 'html/js/main.min.js'
            }
        },
        // min css
        cssmin: {
            target: {
                files: [{
                    'html/css/main.min.css' : ['html/css/content.css', 'html/css/sidebar.css']
                }]
            },
            //target: {
            //    files: [{
            //        expand: true,
            //        cwd: 'html/css/',
            //        src: ['*.css', '*.min.css'],
            //        dest: 'html/css/',
            //        ext: '.min.css'
            //    }]
            //}
        },
        // min js
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                //files: [{
                //    expand: true,
                //    cwd: 'html/js/',
                //    src: ['**/*.js'],
                //    dest: 'js'
                //}],
                files: {
                    'html/js/toggle.min.js': ['html/js/toggle.js']
                }
            }
        }
    })


    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-uncss')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-sass')

    // Do the task
    grunt.registerTask('default', ['cssmin', 'uncss'])
}