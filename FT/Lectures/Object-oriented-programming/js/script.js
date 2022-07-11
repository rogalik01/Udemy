"use strict";

let str ="some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

// const jonh = {
//     health: 100
// };

//Устаревший формат
// jonh.__proto__ = soldier;
// console.log(jonh.armor);
// jonh.sayHello();

const jonh = Object.create(soldier); // Создаём, наследуя от солдата

// Новый формат
// Object.setPrototypeOf(jonh, soldier); // Устанавливаем первому аргументу в качестве прототипа второй аргумент
//     // Если наследник уже создан
jonh.sayHello();

