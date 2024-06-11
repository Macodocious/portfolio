const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

gulp.task('css', function () {
    return gulp.src('src/css/tailwind.css')
        .pipe(postcss([
            tailwindcss(),
            autoprefixer(),
        ]))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/tailwind.css', gulp.series('css'));
});

gulp.task('default', gulp.series('css', 'watch'));