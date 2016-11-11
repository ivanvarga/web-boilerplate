const gulp = require('gulp');

gulp.task('inject', () => {
    const wiredep = require('wiredep').stream;
    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public',
    };
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views/'));
});
