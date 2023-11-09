var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function () {
  return gulp
    .src("src/styles/globals.less")
    .pipe(less())
    .pipe(gulp.dest("src/styles/"));
});

gulp.task("watch", function () {
  gulp.watch("src/**/*.less", gulp.series("less"));
});

gulp.task("default", gulp.series("watch"));