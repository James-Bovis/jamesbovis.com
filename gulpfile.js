var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires Live Reload
var browserSync = require('browser-sync').create();

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
gulp.task('default', gulp.parallel('browserSync', 'sass', function (){
  gulp.watch('stylesheets/**/*.scss', gulp.task('sass'));
  // Other watchers
  gulp.watch('**/*.html').on('change', browserSync.reload);
}))
