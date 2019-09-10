const gulp = require('gulp');

const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);
const postcss = require('gulp-postcss');
const cssvariables = require('postcss-css-variables');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');

const responsive = require('gulp-responsive');

gulp.task('js', function() {
  return gulp.src([
    'src/js/*.js',
    'src/js/*/*.js'])
    .pipe(concat('index.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src([
    'src/css/*/*.css'])
    .pipe(concatCss('main.css', {
      rebaseUrls: false
    }))
    .pipe(postcss([
      cssvariables()
    ]))
    .pipe(uglifycss({
      uglyComments: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('src/assets/image/*.png')
    .pipe(responsive({
      '*.png': [{
        width: 425,
        rename: {
          suffix: '-1@1x',
        },
        format: 'jpg'
      }, {
        width: 425 * 2,
        rename: {
          suffix: '-1@2x',
        },
        format: 'jpg'
      }, {
        width: 900,
        rename: {
          suffix: '-2@1x',
        },
        format: 'jpg'
      }, {
        width: 900 * 2,
        rename: {
          suffix: '-2@2x',
        },
        format: 'jpg'
      }]
    }, {
      quality: 80,
      progressive: true,
      withMetadata: false
    }))
    .pipe(gulp.dest('dist/assets/image'));
});

gulp.task('default', gulp.parallel('css', 'js', 'images'));
