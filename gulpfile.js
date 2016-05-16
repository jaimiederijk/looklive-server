var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');

gulp.task('images', function() {
  return gulp.src('public/images/*')  
    .pipe(plumber({errorHandler: onError}))

    // Image optimization
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))//
    
    // Distribute to build
    .pipe(gulp.dest('public/images'))


});


gulp.task('styles', function() { 
  return gulp.src('public/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/styles'));    // Catch errors

});

gulp.task('scripts', function() {
  return gulp.src('public/js/**/*.js')
    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Concatinate in one file
    .pipe(concat('main.js'))

    // Add a .min version
    .pipe(rename({ suffix: '.min' }))

    //Minify with jsUglify
    .pipe(uglify())

    // Distribute to build
    .pipe(gulp.dest('public/js'))


});

gulp.task('setWatch', function() {
  global.isWatching = true;
});

// Watch
gulp.task('watch', ['setWatch'], function() {

  // Watch .scss files
  gulp.watch('public/styles/*.css', ['styles']);
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('public/images/**/*', ['images']);
});

gulp.task('default', ['styles', 'scripts','images']);