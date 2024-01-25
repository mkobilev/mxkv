var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');

var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');


// server
gulp.task('serv', function () {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            port: 1337,
            open: true
        }));
});


//styles
gulp.task('style', function () {
    return gulp.src('app/sass/assets/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/assets/css'));
});


// gulp.src(['input/folder/**/*']).pipe(gulp.dest('output/folder'));

//build
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify() ))
        .pipe(gulpif('*.css', minifyCss() ))
        .pipe(gulp.dest('public'))


});



gulp.task('watch', function () {
    gulp.watch('app/sass/assets/**/*.sass', ['style'] );

});

gulp.task('default', ['serv', 'watch']);
