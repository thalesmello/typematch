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
		tsStream.dts.pipe(gulp.dest('bin/src')),
		tsStream.js.pipe(gulp.dest('bin/src'))
	]);
});

gulp.task('test', ['build', 'build_test'], () => {
	return gulp.src('bin/spec/*_spec.js')
		.pipe(jasmine());
});

gulp.task('build_test', () => {
	return gulp.src('spec/**/*_spec.ts')
		.pipe(ts({module: 'commonjs'}))
		.pipe(gulp.dest('bin/spec'));
})