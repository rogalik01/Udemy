"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj;

// copy.a = 10;

//console.log(copy);
//console.log(obj);
// obj меняется вместе с copy, т.к. мы скопировали в copy ссылку на obj, а не структуру obj


// копирование объекта через цикл
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        if (typeof(mainObj[key]) == "object") {
            objCopy[key] = copy(mainObj[key]);
        } else {
            objCopy[key] = mainObj[key];
        }
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 20;
// console.log(numbers);
// console.log(newNumbers);


const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //соединение объектов. Возвращает новую структуру 
const clone = Object.assign({}, add); // получаем копию объекта
clone.d = 100;
console.log(add); //соединение объектов. Возвращает новую структуру 
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // создание копии массива
newArray[2] = 'asdasd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; //spread() разворачивает структуру на её переменные 

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array]; // очередной способ копирования массива

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // способ копирования объектов
