const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

gulp.task('css', function () {
    return gulp.src('tailwind.css') // Assuming your Tailwind CSS file is named 'tailwind.css' and is in the root directory
        .pipe(postcss([
            tailwindcss(),
            autoprefixer(),
        ]))
        .pipe(gulp.dest('./')); // Adjust the destination folder if needed
});

gulp.task('watch', function () {
    gulp.watch('tailwind.css', gulp.series('css')); // Watching for changes in 'tailwind.css'
});

gulp.task('default', gulp.series('css', 'watch'));