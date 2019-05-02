"use strict";

var gulp        = require('gulp'), // Подключаем Gulp
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    notify      = require('gulp-notify'), // Подключаем уведомления при ошибках
    plumber     = require('gulp-plumber'); // Подключаем Plumber

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './', // Директория для сервера - app
        },
        notify: false // Вкл/Отк уведомления
    });
});

gulp.task('css', function(){ // Создаем таск Sass
    return gulp.src('css/*.css') // Берем источник
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Styles',
                    message: err.message
                }
            })

        }))
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['browser-sync', 'css', 'js'], function() {
    gulp.watch('css/*.css', ['css']); // Наблюдение за sass файлами
    gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('js/*.js', ['js']); // Наблюдение за JS файлами в корне проекта
});