// include gulp
var gulp = require('gulp'); 

// include plug-ins
var autoprefix = require('gulp-autoprefixer');

// JS hint task
gulp.task('styles', function() {
  gulp.src(['./src/css/*.css'])
    .pipe(autoprefix('last 10 versions'))
    .pipe(gulp.dest('./dist/css'));
});