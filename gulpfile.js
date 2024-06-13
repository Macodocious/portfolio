const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('build', function (done) {
    exec('npm run build', (err, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);
        done(err);
    });
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.html', 'src/**/*.js'], gulp.series('build'));
});

gulp.task('default', gulp.series('build', 'watch'));