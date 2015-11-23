var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');

gulp.task('build', () => {
	return gulp.src('src/**/*.ts')
		.pipe(ts({
			module: 'commonjs'
		}))
		.pipe(gulp.dest('bin'));
});

gulp.task('test', ['build'], () => {
	return gulp.src('spec/**/*_spec.js')
		.pipe(jasmine());
});