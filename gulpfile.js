const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat= require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create()
const include = require('gulp-include')

function pages() {
    return src('app/pages/*.html')
        .pipe(include({
            includePaths: 'app/components'
        }))
        .pipe(dest('app'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(dest('app/css'))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src(
        'app/js/*.js',
        '!app/js/*.min.js'
    )
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function watching() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
    watch(['app/scss/style.scss'], { usePolling: true }, styles);
    watch(['app/js/main.js'], { usePolling: true }, scripts);
    watch(['app/components/*', 'app/pages/*'], { usePolling: true }, pages);
    watch(['app/*.html'], { usePolling: true }).on('change', browserSync.reload)
}


function build() {
    return src([
        'app/index.html', 
        'app/css/style.min.css',
        'app/css/style.css',
        'app/js/main.min.js',
        'app/js/main.js',   
        'app/img',
        'app/fonts'
    ], { base: 'app', allowEmpty: true })
        .pipe(dest('dist'));
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.build = build;
exports.pages = pages;


exports.default = parallel(styles, scripts, pages, watching);