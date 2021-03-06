/*--------------------------------------------------*\
	Convert SVG to PNG
\*--------------------------------------------------*/

// Modules
var gulp = require('gulp');
var svg2png = require('gulp-svg2png');
var changed = require('gulp-changed');

// Task
gulp.task('svg2png', function() {
	var DEST = global.config.distImages;

	return gulp.src(global.config.srcImages + '/**/*.svg')
		// .pipe(changed(DEST)) // Might cause odd behavior
		.pipe(svg2png())
		.pipe(gulp.dest(DEST))
});
