'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`; // если null, то двести
    elem.style.width = `${w}px`;
}

changeParams(box, newHeight, newWidth);

// ?? реагирует только на null и undefined

let userName;

console.log(userName ?? 'User');


let userName1 = null;
let userName2;

console.log(userName1 ?? userName2 ??'User'); // приоритет выполнения тот же, что у ||
// ?? нельзя использовать с &&