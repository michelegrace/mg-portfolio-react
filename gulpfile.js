var gulp = require('gulp');
var series = require('gulp').series;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var browsersync = require('browser-sync').create();

sass.compiler = require('node-sass');

function reload() {
  browsersync.reload();
}

function sync() {
  browsersync.init({
      server: {
          baseDir: "./public"
      }
  });
  gulp.watch("./public/assets/styles/**/*.scss", css);
  // gulp.watch('./assets/js/*.js', js);
  gulp.watch("index.html").on('change', reload);
};


function css(){
  return gulp
    .src("public/assets/styles/*.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('App.css'))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest("public/dist/styles"))
};

// function js(){
//   return gulp
//   .src(['./assets/js/*.js'])
//   .pipe(plumber())
//   .pipe(concat('all.js'))
//   .pipe(gulp.dest('./public/js'))
//   .pipe(browsersync.stream());
// }

// function thirdParty(){
//   return gulp
//   .src('./public/assets/third_party/animejs/lib/anime.min.js')
//   .pipe(plumber())
//   .pipe(gulp.dest('./public/dist/third_party'))
//   .pipe(browsersync.stream());
// }

function imgMin() {
  return gulp
    .src('public/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/dist/images'))
    .pipe(browsersync.stream());
  };

  function fonts(){
    return gulp
      .src('public/assets/fonts/*')
      .pipe(gulp.dest('public/dist/fonts'))
      .pipe(browsersync.stream());
  }

exports.default = series(css, imgMin, fonts);
exports.watch = gulp.parallel(css, sync);
exports.build = series(css);