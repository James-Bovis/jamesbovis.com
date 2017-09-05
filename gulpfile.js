var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires Live Reload
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('stylesheets/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('stylesheets/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})


// Gulp watch syntax
gulp.task('default', ['browserSync', 'sass'], function (){
  gulp.watch('stylesheets/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('**/*.html', browserSync.reload);
})