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

/////////////////////////////////////////
// PRODUCTION
/////////////////////////////////////////

gulp.task('production', function (callback) {
  runSequence(['clean', 'sass', 'nunjucks', 'images', 'concat', 'uncss'],
    callback
  )
})

// Deletes the dist folder
gulp.task('clean', function() {
  return del.sync('dist');
})

// Goes though all the CSS files in SRC/stylesheets and strips out anything thats not being used
gulp.task('uncss', function () {
  return gulp.src('dist/stylesheets/main.css')
    .pipe(uncss({
        html: ['dist/**/*.html'],
    }))
    .pipe(gulp.dest(siteOutput + '/stylesheets'));
});

/////////////////////////////////////////
// LOCAL
/////////////////////////////////////////

  // Main Gulp Task
  gulp.task('default', function (callback) {
    runSequence(['sass', 'nunjucks', 'images', 'concat', 'watch', 'browserSync'],
      callback
    )
  })

  // Compiles the SASS into CSS
  gulp.task('sass', function(){
    return gulp.src('src/stylesheets/main.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest(siteOutput + '/stylesheets'))
      .pipe(browserSync.reload({
        stream: true
      }))
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

  // Compress images
  gulp.task('images', function(){
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest(siteOutput +  '/img'))
  });

  // Minifies all the src/js files into 1 file
  gulp.task('concat', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('jamesbovis.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(siteOutput + '/js'));
  });

  // Watches CSS and JS files for changes and reloads browser
  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/stylesheets/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('**/*.html', browserSync.reload); 
    gulp.watch('js/*.js', browserSync.reload); 
  });

  // Runs browsersync on dist folder
  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: siteOutput
      },
    })
  })