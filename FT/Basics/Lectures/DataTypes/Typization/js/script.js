'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(String(null));

// 2) Конкатенация
console.log(typeof(5 + ''));

// Пример
// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// Пример 2
// const fontSize = 26 + "px";




// To Number

// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'4'));

// 3)
console.log(typeof(parseInt("15px", 10))); // 10 - сс

// Пример
let answer = +prompt("Hello, enter a number", "");


// To boolean

// 0, '', null, undefined, NaN - всегда превращаются в false

// Пример
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2)
console.log(typeof(Boolean('4')));

// 3) !! - переводит строку в булеан
console.log(typeof(!!"4444"));