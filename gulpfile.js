const $del = require('del');
const $gulp = require('gulp');
const $gulpReplace = require('gulp-replace');

$gulp.task('clean', () => $del(['./dist/']));

$gulp.task('clean-test', () => $del(['./test/dist/']));

$gulp.task('build', ['clean'], () => {
	return $gulp.src([
		'./src/*.js',
		'./src/*._'
	]).pipe(
		$gulpReplace(
			(/'assets/mg), '\'https://sporeui.github.io/spore-documentation-theme/src/assets'
		)
	).pipe($gulp.dest('./dist'));
});
