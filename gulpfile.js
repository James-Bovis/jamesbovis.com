var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');

// BUILDING DIST VERSION

  // Deletes the dist folder
  gulp.task('clean:dist', function() {
    return del.sync('dist');
  })

  // Goes though all the CSS files in SRC/CSS and strips out anything thats not being used
  gulp.task('uncss', function () {
    // Go through every CSS file EXCEPT the fbmessenger.css file
    return gulp.src(['src/stylesheets/**/*.css' , '!src/stylesheets/uncss/**/*.css'])
      .pipe(uncss({
          html: ['src/**/*.html'],
      }))
      .pipe(gulp.dest('dist/stylesheets/'));
  });

  // Compress images
  gulp.task('images', function(){
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img'))
  });

  // Runs the entire build process to create a finished dist folder
  gulp.task('build', function (callback) {
    runSequence('clean:dist', 'sass', 'uncss', 
      ['copy-html', 'useref', 'images'])
  })


  // Copies the HTML files for now
  // Will use once templating is implemented
  gulp.task('copy-html', function(){
    return gulp.src('src/**/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulp.dest('dist'))
  });

  // Concate my js files into 1 single minified file
  gulp.task('useref', function(){
    return gulp.src('src/index.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist'))
  });

// BUILDING LOCAL VERSION
  // Runs browsersync on root folder
  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'src/'
      },
    })
  })

  // Compiles the SASS into CSS
  gulp.task('sass', function(){
    return gulp.src('src/stylesheets/main.scss')
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass - outputs compressed file
      .pipe(gulp.dest('src/stylesheets/'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  // Watches CSS and JS files for changes and reloads browser
  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/stylesheets/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('**/*.html', browserSync.reload); 
    gulp.watch('js/*.js', browserSync.reload); 
  });

  // Main Gulp Task
  gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
      callback
    )
  })