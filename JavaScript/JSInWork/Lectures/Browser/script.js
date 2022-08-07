'use strict';

// const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height);




// const box = document.querySelector('.box');

// const width = box.offsetWidth; // получеаем ровно то, что в css
// const height = box.offsetHeight;

// console.log(width, height);


const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.scrollWidth; // получаем на 15px меньше (минус полоса прокрутки)
const height = box.scrollHeight; // именно та высота с учётом всех прокруток

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // после клика раскрываем весь контент
    console.log(box.scrollTop); // получаем высоту пролистанного контента
});

console.log(box.getBoundingClientRect());
// координата right отсчитывается от левой границы экрана до правой границы контента
// тем временнем в css это отступ от правой границы экрана до правой границы контента

// bottom = height + top
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); // можем получить стили псевдоэлементов (arg1, псевдоэлемент внутри arg1)

console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

//window.scrollBy(x, y); скроллим страницу на 400px вниз относительно текущего положения
//window.scrollTo(x, y); скроллим страницу на 400px вниз относительно начала страницы