var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlReplace = require('gulp-html-replace'),
    autoPrefixer = require('gulp-autoprefixer'),
    cssMin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    useMin = require('gulp-usemin');

var paths = {
    sassSrcPath: ['./sass/**/*.scss'],
    sassDestPath: './css/'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


gulp.task('css',['minify'], function(){
   return gulp.src('./**/*.html')
    .pipe(htmlReplace({
       'css':'css/style.min.css'
   }));
});
gulp.task('sass', ['css'], function () {
    gulp.src(paths.sassSrcPath)
        .pipe(sass())
        .pipe(autoPrefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.sassDestPath));
});

gulp.task('minify', function(){
  gulp.src(paths.sassDestPath+'**/style.css')
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));  
});


gulp.task('watch', function() {
    gulp.watch(paths.sassSrcPath, ['sass'])
});

gulp.task('default', ['sass','watch']);
