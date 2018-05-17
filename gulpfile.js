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
var nunjucksRender = require('gulp-nunjucks-render');
var concat = require('gulp-concat');

var siteOutput = './dist';

// BUILDING DIST VERSION

  // Deletes the dist folder
  gulp.task('clean:dist', function() {
    return del.sync('dist');
  })

  // Goes though all the CSS files in SRC/CSS and strips out anything thats not being used
  gulp.task('uncss', function () {
    return gulp.src(['src/stylesheets/**/*.css' , '!src/stylesheets/uncss/**/*.css'])
      .pipe(uncss({
          html: ['src/**/*.html'],
      }))
      .pipe(gulp.dest('dist/stylesheets/'));
  });

  // Nunjucks task
  gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest(siteOutput))
  });

  gulp.task('concat', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('jamesbovis.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
  });


  // Portfolio useref
  gulp.task('useref-portfolio', function(){
    return gulp.src('src/portfolio/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist/portfolio/'))
  });

  // Compress images
  gulp.task('images', function(){
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest(siteOutput +  '/img'))
  });

  // Runs the entire build process to create a finished dist folder
  gulp.task('build', function (callback) {
    runSequence('clean:dist', 'sass', 'uncss', 'nunjucks', 
      ['concat', 'images', 'browserSync'])
  })

// BUILDING LOCAL VERSION
  // Runs browsersync on root folder
  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'dist/'
      },
    })
  })

  // Compiles the SASS into CSS
  gulp.task('sass', function(){
    return gulp.src('src/stylesheets/main.scss')
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass - outputs compressed file
      .pipe(gulp.dest(siteOutput + '/stylesheets'))
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
    runSequence(['sass', 'nunjucks', 'browserSync', 'watch'],
      callback
    )
  })