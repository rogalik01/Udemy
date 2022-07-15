'use strict';

const box = document.getElementById("box");

console.log(box);

const buttons = document.getElementsByTagName('button'); // Получаем псевдомассив элементов

console.log(buttons);

// Если сразу хотим получить переменную под конкретным номером
const button2 = document.getElementsByTagName('button')[1];
console.log(button2);
console.log(buttons[1]);

// Даже элемент по тегу только один на странице, то всё равно получаем коллекцию!

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll(".heart"); // внутрь скобок помещаем css селектор
// Данный метод поддерживает метод forEach

console.log(hearts);

hearts.forEach(item => {
    console.log(item);  
});

const oneHeart = document.querySelector('.heart'); // Позволяет получить первый попавшийся подходящий элемент на странице
console.log(oneHeart);