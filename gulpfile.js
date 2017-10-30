var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('css', function () {
    gulp.src([
        'src/**/*.css'
    ])
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('template', function () {
    return gulp.src('src/**/*.html')
        .pipe(minifyHTML({
            quotes: true
          }))
        .pipe(templateCache({ standalone: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', ['template'], function () {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'dist/templates.js',
        'src/**/*.js',
        '!src/**/*.spec.js'
    ])
        .pipe(uglify())
        .pipe(jshint())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});


gulp.task('watch', function () {

    connect.server({
        root: 'dist',
        livereload: true
    });
    gulp.run('default');
    gulp.watch('src/**/*.css', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('css');
    });

    gulp.watch('src/**/*.js', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('js');
    });

    gulp.watch('src/**/*.html', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('js');
    });

    gulp.watch('src/index.html',function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('copy');
    });

});

gulp.task('copy', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('default', function () {
    gulp.run('copy', 'js', 'css');
});