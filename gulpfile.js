var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src('src/*.js').pipe(eslint())
  .pipe(eslint.format()) // output lint results to console
  .pipe(eslint.failOnError());
});
