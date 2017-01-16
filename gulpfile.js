'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del'),
  useref = require('gulp-useref'),
     iff = require('gulp-if'),
    csso = require('gulp-csso'),
   pages = require('gulp-gh-pages'),
   browserSync = require('browser-sync').create();
;

var options = {
  src: './src/',
  dist: './dist/'
}


gulp.task('compileSass', function() {
  return gulp.src(options.src + 'scss/**/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest(options.src + 'css/'));
});

gulp.task('html', ['compileSass'], function() {
  var assets = useref.assets();
  return gulp.src(options.src + 'index.html')
              .pipe(assets)
              .pipe(iff('*.css', csso()))
              .pipe(assets.restore())
              .pipe(useref())
              .pipe(gulp.dest(options.dist));
});

gulp.task('uglify', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watchFiles', function() {
  gulp.watch(options.src + 'scss/**/*.scss', ['compileSass']);
});

gulp.task('assets', function(){
  return gulp.src([options.src + 'img/**/*',
                   options.src + 'fonts/**/*'], {base: options.src})
          .pipe(gulp.dest(options.dist));
});

// watch sass
gulp.task('serve', ['compileSass', 'watchFiles']);

gulp.task('clean', function() {
  del([options.dist]);
  // delete compiles css and map
  del([options.src + 'css/main.css*']);
});

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  });
});

gulp.task('build', ['html', 'assets', 'uglify']);

gulp.task('deploy', function(){
  return gulp.src(options.dist + '**/*')
    .pipe(pages());
});

gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
