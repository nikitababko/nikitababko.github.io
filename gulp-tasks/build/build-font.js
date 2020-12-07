module.exports = function (gulp, plugins) {
    return async function () {
        gulp.src("./src/fonts/**/*").pipe(gulp.dest("./build/fonts"));
    };
};
