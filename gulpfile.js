var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
        .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', gulp.series('sass'));
});