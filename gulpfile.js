require('babel/register');

var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('gulp-babel');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var buffer = require('vinyl-buffer');

function restart_nodemon() {
	if (nodemon_instance) {
		console.log("Restarting nodemon");
		nodemon_instance.emit('restart');
	} else {
		console.log("Nodemon isntance not ready yet")
	}
}

gulp.task('babel-client', function() {
	browserify({
			entries: './src/client/js/main.js',
			debug: true
		})
		.transform(babelify)
		.bundle()
		.on('error', function(err) {
			console.log('Babel client:', err.toString());
		})
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./public/dist/'));
});

var nodemon_instance;

gulp.task('nodemon', function() {

	if (!nodemon_instance) {
		nodemon_instance = nodemon({
			script: 'src/server/server.js',
			watch: 'src/__manual_watch__',
			ext: '__manual_watch__',
			verbose: false,
		}).on('restart', function() {
			console.log('~~~ restart server ~~~');
		});
	} else {
		nodemon_instance.emit('restart');
	}

});

gulp.task('default', ['babel-client']);

gulp.task('watch', ['default', 'nodemon'], function() {
	gulp.watch('src/client/js/**/*.*', ['babel-client']);
});
