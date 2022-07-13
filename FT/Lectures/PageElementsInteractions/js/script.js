'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'), // тут уже document можно поменять на wrapper
    wrapper = document.querySelector('.wrapper');

console.dir(box);
box.style.backgroundColor = 'green';
box.style.width = "500px";
const num = 500;
box.style.cssText = `background-color: purple; width: ${num}px`; // inline style (удобно для смены сразу нескольких стилей)

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'purple';

/* // для изменения стилей нескольких элементов
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
} // устаревший неиспользуемый вариант */

hearts.forEach (item => {
    item.style.backgroundColor = 'black';
});

// Создание элементов на странице
const div = document.createElement('div'); // Существует только внутри js-скрипта
// const text = document.createTextNode('I were here.');

// Работа с css-классами
div.classList.add('black');

// Методы для работы со страницей

// Добавляем в конец body
// document.body.append(div);

// Добавляем в конец wrapper
wrapper.append(div);

// Добавляем в начало род.блока
// wrapper.prepend(div);

// Добавляем перед элементом
// hearts[0].before(div);

// Добавляем после элемента
// hearts[0].after(div);

// Удаляем элемент
// circles[0].remove();

// Один элемент заменяем другим
// hearts[0].replaceWith(circles[0]);

/// Устаревшие конструкции
//  wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[0]); // что, перед чем

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]); // на что, что меняем


/// Редактируем элементы
div.innerHTML = "<h1>Hello World</h1>"; // безопаснее
// div.textContent = "Hello"; // чаще используется для ввода пользователем
div.insertAdjacentHTML("", '<h2>Hello</h2>');
//beforebegin вставляет непосредственно перед элементом
//afterbegin вставляет в начало элемента
//beforeend вставляет в конец элемента
//aftereend вставляет непосредственно после элемента
