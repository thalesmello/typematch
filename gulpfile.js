var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var merge = require('merge2');


var buildProject = ts.createProject({
	module: 'commonjs',
	declaration: true
});

gulp.task('build', () => {
	var tsStream = gulp.src('src/**/*.ts')
		.pipe(ts(buildProject));
		
	return merge([
		tsStream.dts.pipe(gulp.dest('bin/src')),
		tsStream.js.pipe(gulp.dest('bin/src'))
	]);
});

gulp.task('test', ['build', 'build_test'], () => {
	return gulp.src('bin/spec/*_spec.js')
		.pipe(jasmine());
});

var specProject = ts.createProject({
	module: 'commonjs',
});

gulp.task('build_test', () => {
	return gulp.src('spec/**/*_spec.ts')
		.pipe(ts(specProject))
		.pipe(gulp.dest('bin/spec'));
})

gulp.task('watch', ['test'], () => {
	gulp.watch(['spec/**/*_spec.ts', 'src/**/*.ts'], ['test']);
})