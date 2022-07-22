'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block);

// // console.log(block.textContent);
// console.log(1 + 2);
// // код выдаст ошибку, т.к. block не существует
// // проблема обычно решается с помощью условия
// if (block) {
// console.log(block.textContent);
// }
console.log(block?.textContent); // если block не равен undefined или null, то идёт операция
console.log(1 + 2);              // если равен, то просто возвращает undefined вместо операции

const userData = {
    name: '123',
    age: null,
    say: () => {
        console.log(`Hello`);
    }
};

// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);
userData.say();
userData.hey?.();
// так можно работать и с квадратными скобками
