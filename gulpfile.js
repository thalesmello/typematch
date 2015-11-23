var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var merge = require('merge2');

gulp.task('build', () => {
	var tsStream = gulp.src('src/**/*.ts')
		.pipe(ts({
			module: 'commonjs',
			declaration: true
		}));
		
	return merge([
		tsStream.dts.pipe(gulp.dest('bin')),
		tsStream.js.pipe(gulp.dest('bin'))
	])
});

gulp.task('test', ['build'], () => {
	return gulp.src('spec/**/*_spec.js')
		.pipe(jasmine());
});