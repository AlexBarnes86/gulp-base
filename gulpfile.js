// Load gulp + tasks
var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./gulp/tasks');
var config = require('./gulp/config');

gulp.task('default', [
	'scripts',
	'styles',
	'static',
	'imagemin',
	'svgmin',
	'svg2png',
	'vendor'
]);

// Clean + run default
gulp.task('build', ['clean'], function() {
	gulp.start('default');
});
