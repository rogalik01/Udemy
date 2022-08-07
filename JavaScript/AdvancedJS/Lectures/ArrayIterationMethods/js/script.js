'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map позволяет трансформировать каждый элемент массива

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase()); // но лучше создавать новую переменную

console.log(answers);

// some если хотя бы один эл-т подходит под условие - возвращаем true

const some = [4, 'qwq', 'khjfukj'];

console.log(some.some(item => typeof(item) === 'number'));

// every аналогично, но для каждого элемета
console.log(some.every(item => typeof(item) === 'number'));

// reduce собирает массив в одно целое
// 1
const arr = [4, 5, 1, 3, 2, 6];

const result2 = arr.reduce((sum, current) => sum + current);
console.log(result2);

const arrStr = ['apple', 'pear', 'plum'];

const result2Str = arrStr.reduce((sum, current) => sum + ', ' + current, 3); // в качестве arg2 в reduce можно передать начальное значение
const result3Str = arrStr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result2Str);
console.log(result3Str);


const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

// .entries - метод объектов, возращающий матрицу
console.log();

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);
console.log(Object.entries(obj));
console.log();
console.log(Object.entries(obj).filter(item => item[1] === 'person'));
console.log();
console.log(newArr);