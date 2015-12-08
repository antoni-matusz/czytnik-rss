module.exports = function(grunt){
 grunt.initConfig({
     
     clean:{
       dist: "dist/"  
     },
     
     targethtml: {
         dist: {
             files: {
                 "dist/public/index.html": "public/index.html"
             }
         }
     },
     
    concat: {
            dist: {
                files: {
                    "dist/public/js/libs.min.js": [
                        "public/js/libs/jquery.js",
                        "public/js/libs/underscore.js",
                        "public/js/libs/backbone.js",
                        "public/js/libs/*.js"
                    ],
                    "dist/public/js/app.min.js": [
                        "public/js/Setup.js",
                        "public/js/Models/*.js",
                        "public/js/Collections/*.js",
                        "public/js/Views/*.js",
                        "public/js/Routers/*.js",
                        "public/js/App.js"
                    ]
                }
            }
        },
        
        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "dist/public/js/",
                        src: "*.js",
                        dest: "dist/public/js/"
                    }
                ]
            }
        },
        
        cssmin: {
            dist: {
                files: {
                    "dist/public/css/style.min.css": "public/css/style.css"
                }
            }
        },
        
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    "dist/public/index.html": "dist/public/index.html"
                }
            }
        },
        
        copy: {
            dist: {
                files: [
                    {expand: true, src: "server.js", dest: "dist/"},
                    {expand: true, cwd: "public/img/", src: "*", dest: "dist/public/img/"}
                ]
            }
        }
     
 }); 
 
 grunt.loadNpmTasks("grunt-contrib-clean");
 grunt.loadNpmTasks("grunt-targethtml");
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-htmlmin');
 grunt.loadNpmTasks('grunt-contrib-copy');
 
 grunt.registerTask("build", ["clean", "targethtml", "concat", "uglify", "cssmin", "htmlmin", "copy"]);
 
};