'use strict';

const box = document.querySelector('.box');


let observer = new MutationObserver(mutationRecords => { // mutationRecords - список изменений
    console.log(mutationRecords);
}); 

observer.observe(box, { // arg1 - следить за чем, arg2 - конфигурация с теми настрйоками, за которыми нам нужно будет следить
 childList: true
}); // свойства из объекта arg2 можно прочесть в документации


// observer.disconnect(); // отключение observer'а
// resize observer работает аналогично, но отслеживает иззменение размеров объекта