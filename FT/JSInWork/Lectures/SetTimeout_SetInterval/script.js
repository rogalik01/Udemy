'use strict';

/* const timer = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello!'); // arg1 - ф-я, к-я д-а б-т запуститься ч-з определённый промежуток времени, arg2 - м_сек до вызова функции 
                    // arg3... - arg ф-и из arg1
// принимает либо объявление ф-и, либо её название

const timer2 = setTimeout(logger, 4000);

setTimeout(logger, 6000, 'Example2');


clearInterval(timer2); // сохранение интервала в функцию позволяет отменять интервал при необходимости */

/* function logger(text = 'Example1') {
    if (count == 3) {
        clearInterval(timer2);
    }
    console.log(text);
    count++;
}

const btn = document.querySelector('.btn');
let timer2; // для использования во всех видимых ф-х
let count = 0;

timer2 = setTimeout(logger, 1000);

btn.addEventListener('click', () => {
    // timer2 = setTimeout(logger, 2000, 'A timer example');
    timer2 = setInterval(logger, 1000, 'A timer example'); // срабатывает каждые arg2 мс
});

// У setInterval есть проблема, когда ф-я вып-ся дольше, чем выдано интервала на их выполнение

let id = setTimeout(function log() { // благодаря рекурсивному вызову каждая новая ф-я б-т дожидаться выполнения предыдущей
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */


const btn = document.querySelector('.btn');
let timer2; // для использования во всех видимых ф-х
let count = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 5); // минимальный интервал - 4мс
    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
