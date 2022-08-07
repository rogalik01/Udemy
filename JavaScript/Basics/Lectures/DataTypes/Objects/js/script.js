"use strict";

const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // Деструктуризация объекта
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Property ${i} of object ${key} equils "${options[key][i]}"`);
        }
        counter++;
    } else {
        console.log(`Property ${key} equils "${options[key]}"`);
        counter++;
    }
}
console.log(`\nObject options summary contains ${counter} properties.`);

console.log(Object.keys(options)); // данный метод на основании объекта создаёт массив,
// в к-м все эл-ты - это ключи на верхнем уровне объекта
console.log(Object.keys(options).length); // данный метод на основании объекта создаёт массив,

// Object.is() определяет, являются ли два значения различимыми (одинаковыми)

// Object.keys возращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в к-м они обходились бы циклом for...in
//                                 именно ключей (названий!) этих свойств

// Object.values возращает массив из значений перечисляемых свойств переданного объекта, в том же порядке, в к-м они обходились бы циклом for...in

// Object.values возращает массив собственных перечисляемых свойств указанного объекта, в том же порядке, в к-м они обходились бы циклом for...in
//                                 в формате [key, value]

// Для вычисления длины объекта передводим его в объект