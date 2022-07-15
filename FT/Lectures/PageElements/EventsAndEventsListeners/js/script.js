'use strict';

// ПЕРВЫЙ СПОСОБ задания обработчика указан, как комментарий, в index.html
// Малоиспользуемый, устаревший вариант


// ВТОРОЙ СПОСОБ
const btn = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('Click!');
// }; 
// Также почти не используется
// Если указать второй такой же обработчик, то он будет заменять первый, что является большим недостатком
// Удалить обработчик при таком объявлении затруднительно?


// btn.addEventListener('click', () => { // Первый аргумент - название события, второй - callback-функция
//     alert('Click!');
// });
// Из плюсов: Данный метод позволяет нам назначать несколько действий на одно событие
btn[0].addEventListener('mouseenter', (event) => { // Первый аргумент - название события, второй - callback-функция
    console.log(event.target);
    event.target.remove();
    // console.log('Mouse');
}); // первым аргументом callback-функции всегда передаётся событие

btn[1].addEventListener('click', (event) => { 
    console.log(event.target);
    event.target.remove();
});

const deleteElement = (e) => {
    e.target.remove();
};

let i = 0;
const logElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn[2].removeEventListener('click', logElement);
    }
};

btn[2].addEventListener('click', logElement);




const overlay = document.querySelector("overlay");
const logTargetType = (e) => {
    console.log(e.currentTarget); // чтобы не было путаницы между родителем и ребёнком
    console.log(e.type);          // однако просто target всё равно используется чаще
};

overlay.addEventListener('click', logTargetType, {once: true});
btn[3].addEventListener('click', logTargetType, {once: true}); 
// Всплытие событий - явление, когда обработчик событий срабатывает сначала на вложенном элементе, а потом 
// на его родителе и т.д. по иерархии



const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); //Отмена стандартного поведения в браузере
    // данная строка обычно помещается на самый верх обработчика событий

    console.log(event.target);
});

// btn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log("Способ навесить обработчик на несколько элементов сразу");
//     });
// });

// У addERventListener на самом деле три аргумента, в третьем в объекте располагаются опции обработчика
// Так, при передаче аргумента {once: true}, обработчик сработает лишь однажды