'use strict'; // JS wordt uitgevoerd in script modus


// Je moet dan niet meer linken in de html
const gulp = require('gulp');
const sass = require('gulp-sass');

// Taak 1. 
// voor de scss uit het mapje sass naar css om te zetten in het mapje css
gulp.task('sass', function() {
    console.log('TASK: transpile sass to css...');
    return gulp.src('./sass/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./main_folder'));
});

// Taak 2.
// Arrow function als er een bronbestand verandert in een scss directory voert hij de sass uit
// Simpel: Alles gaat uit zichzelf
gulp.task('sass-watch', () => {
    return gulp.watch('./sass/**/*.scss',['sass']); 
});


