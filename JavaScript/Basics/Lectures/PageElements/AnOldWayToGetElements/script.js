'use strict';

const boxesQuery = document.querySelectorAll('.box');    // используется гораздо чаще
const boxesGet = document.getElementsByClassName('box'); // меньше методов для взаимодействия

boxesQuery[0].remove(); // остаётся в псевдомассиве
boxesGet[0].remove();   // не остаётся в псевдомассиве (отслеживает все изменения)

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// } // живая коллекция будет отслеживать добавленные элементы

console.log(boxesQuery);                // на выходе выдаёт статичную коллекцию
console.log(boxesGet);                  // на выходе выдаёт живую коллекцию
// console.log(document.body.children);    // на выходе выдаёт живую коллекцию
// вышеперечисленное аналогично для всех методов на -get

console.log(Array.from(boxesGet)); // получаем из псевдомассива обычный массив с данными

console.log('2\n');

boxesQuery.forEach( box => {
    if (box.matches('.this')) { // ищем элемент, подходящий под селектор
        console.log('This one!');
        console.log(box);
    }
});


console.log('3\n');

console.log(boxesQuery[2].closest('.wrapper')); // ближайший элемент-родитель, удовлетворяющий условию  