'use strict';

let id3 = Symbol('id3');

const obj = {
    'name': 'Test',
    [Symbol('id1')]: 1,
    [id3]: 2,
    getId: function() {
        return this[id3];
    }
};

/*
let id = Symbol('id'); // arg - описание символа
let id2 = Symbol('id'); // arg - описание символа
// Символы всегда уникальны (даже если у них одинаковое описание)

console.log(id == id2);
console.log(id === id2);
obj[id] = 1;

*/

// console.log(obj['id']); // обращаемя к свойству объекта через строчку
console.log(obj);
// console.log(obj[id]);
// Символы позволяют создавать скрытые (приватные) при обычном обращении свойства
// Приватность свойств помогает удостовериться в том, что свойство не будет случайно перезаписано

for (let value in obj) {
    console.log(value);
}

console.log(obj.getId());
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

console.log("Пример:");

const myAwesomeDB = {
    movies: [],
    actors: [],
    id: 123
};

// сторонний код библиотеки

myAwesomeDB.id = '32232332';

console.log(myAwesomeDB["id"]);





const myNewAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123,
    [Symbol.for("id2")]: 321 // Теряет ссылочную уникальность
};

// сторонний код библиотеки

myNewAwesomeDB.id = '32232332';

console.log(myNewAwesomeDB["id"]);
console.log(myNewAwesomeDB[Symbol.for("id2")]);
console.log(myNewAwesomeDB);
