module.exports = function(gulp, plugins) {
    return async function() {
        gulp.src("./src/js/*.js")
            .pipe(plugins.concat("index.js"))
            .pipe(gulp.dest("./src/js/"))
            .on("error", console.error.bind(console));
    };
};
