// Пример 1
// function func() {
//     smth = 'string'; // без использования "use strict" создаётся новая переменная, в которую мы помещаем значение
//     // работает как window.smth = "srting";
//     // создаётся новая глобальная переменная, которую не сможет удалить сборщик мусора
// }


// Пример 2
// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if(node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);
// Даже если удалим э-т DOM-дерева, ссылка на него останется внутри интервала, из-за чего его не с-т удалить сборщик


// Пример 3
// Неудаление обработчика событий удалённого элемента (аналогично Примеру 2)(неактуально)


// Пример 4
// Замыкание функций
// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello!!');
//     };
// }

// const sayHello = outer(); // Сюда поместится функция inner, но из-за замыкания функций в памяти также сохранится potentiallyHugeArray 

// Пример 5
// Ссылки на DOM-элементы
// При удалении элемента вёрстки ссылка на него всё ещё может оставаться внутри переменной js

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    return div;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();
// аналогично работает addBlock, оставляя переменные врнутри js
// решается устранением объявления testDiv(глобальная переменная) и переносом append внутрь createElement()