// npm i jquery --save (--save, т.к. работать будет уже в production-версии)
// https://page2page.lohmach.info/index.php5/Заглавная_страница.html карта функций 
import $ from 'jquery';

// const btn = $('#btn');

// console.log(btn);

$(document).ready(function() { // Вместо DOMContentLoaded
    $('.list-item:first').hover(function() {// first возвращает первый подходящий эл-т, hover - событие при наведении мыши на элемент
        $(this).toggleClass('active'); // this - эл-т, на к-м произошло событие
    });


    $('.list-item:eq(2)').on('click', function() { // eq выдаёт подходящий элемент с нужным индексом
        $('.image:even').fadeToggle();
    }); 



    $('.list-item:eq(4)').on('click', function() { // eq выдаёт подходящий элемент с нужным индексом
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 500);
    });
});