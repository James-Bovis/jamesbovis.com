var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var useref = require('gulp-useref');
var uncss = require('gulp-uncss');

// Compiles the sass code into css
gulp.task('sass', function(){
  return gulp.src('stylesheets/main.scss')
    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass - outputs compressed file
    .pipe(gulp.dest('stylesheets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Runs browsersync on root folder
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})


// Gulp watch syntax
gulp.task('default', ['browserSync', 'sass'], function (){
  gulp.watch('stylesheets/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('**/*.html', browserSync.reload);
})
