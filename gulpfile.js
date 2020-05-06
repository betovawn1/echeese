const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
}

function run() {
    gulp.watch('./src/sass/*.scss', style);
    gulp.watch('./src/sass/**/*.scss', style);
}

exports.run = run;
exports.style = style;