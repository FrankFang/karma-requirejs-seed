'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower-files');

var bower_files = 'src/scripts/bower_files/'

gulp.task('bower-files', function () {
  return bower().pipe(gulp.dest(bower_files));
});

gulp.task('watch', function () {
  return gulp.watch('bower.json', ['bower-files']);
});

// Default Task
gulp.task('default', ['build']);
gulp.task('dev', ['bower-files', 'watch']);
gulp.task('build', ['bower-files']);
