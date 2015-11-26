var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var merge = require('merge2');
var notify = require('gulp-notify');


var tsOpts = {
	module: 'commonjs',
	target: 'ES5',
	declaration: true,
	noEmitOnError: true
}

var buildProject = ts.createProject(tsOpts);

gulp.task('build', () => {
	var tsStream = gulp.src('src/**/*.ts')
		.pipe(ts(buildProject));

	return merge([
		tsStream.dts.pipe(gulp.dest('bin/src')),
		tsStream.js.pipe(gulp.dest('bin/src'))
	]);
});

gulp.task('bundle_definitions', (done) => {
	var opts = {
		name: 'typematch',
		main: 'bin/src/typematch.d.ts',
		baseDir: 'bin',
		out: 'src/bundle.d.ts',
	};

	// require module
	var dts = require('dts-bundle');

	// run it
	dts.bundle(opts);
	return done();
})

gulp.task('test', ['build', 'build_test'], () => {
	return gulp.src('bin/spec/*_spec.js')
		.pipe(jasmine())
		.on("error", notify.onError("Error: <%= error.message %>"))
		.pipe(notify('done'));
});

var specProject = ts.createProject(tsOpts);

gulp.task('build_test', () => {
	return gulp.src('spec/**/*_spec.ts')
		.pipe(ts(specProject))
		.pipe(gulp.dest('bin/spec'));
})

gulp.task('watch', ['test'], () => {
	gulp.watch(['spec/**/*_spec.ts', 'src/**/*.ts'], ['test']);
});