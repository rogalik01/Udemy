'use strict';

// localStorage - объект, к-й является свойством глобального объекта window (window.localStorage)
// Вмещает около 5мб информации

// localStorage.setItem('number', 5); // arg1 - название ключа, arg2 - его значение
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.clear(); // полностью очищает хранилище


const checkBox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkBox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkBox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// Записывать свои объекты в localStorage можно, например, при помощи перевода в формат JSON, иначе просто будем получать "object Object", т.к.
// значения lS принимают только строки?

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));