/*eslint-disable*/
var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var NAME = pkg.name;
var BANNER = ['/**',
    ' * <%= pkg.name %>',
    ' * @author <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

/**
 * Paths
 */
var ENTRY = 'index.js',
    DIST = './dist';

gulp.task('connect', function() {
    connect.server();
});

gulp.task('bundle', function() {
    return browserify({entries: ENTRY, debug: true})
        .bundle()
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source(NAME + '.js'))
        .pipe(buffer())
        .pipe(header(BANNER, {pkg: pkg}))
        .pipe(gulp.dest(DIST))
        .pipe(uglify())
        .pipe(rename(NAME + '.min.js'))
        .pipe(header(BANNER, {pkg: pkg}))
        .pipe(gulp.dest(DIST));
});
