const $gulp = require('gulp');
const $gulpTcmsUpload = require('@tencent/gulp-tcms-upload');

const $package = require('../package.json');

$gulp.task('upload', () => {
	return $gulp.src([
		'./lib/assets/**/*'
	], {
		cwd: './lib',
		base: './lib'
	}).pipe(
		$gulpTcmsUpload({
			// overwrite: 1,
			cookieFile: 'ignore/cookie.md',
			uploadTo: 'houseria/2016/spore-documentation-theme/v' + $package.version
		})
	);
});

