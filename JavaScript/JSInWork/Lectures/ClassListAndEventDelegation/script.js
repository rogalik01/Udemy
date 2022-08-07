const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // получаем, что у кнопки 2 класса
// console.log(btns[0].classList.item(0)); // item() позволяет получить класс под определённым индексом
// console.log(btns[0].classList.item(1));

// // методы, которые используются чаще
// console.log(btns[0].classList.add('red', 'asdfasf')); // в данных командах можем указывать сразу несколько классов
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); // если класс в данный момент есть на элементе, то класс будет убран, если его нет, то добавлен


// console.log(btns[1].classList.add('red'));
// if(btns[1].classList.contains('red')) {
//     console.log('There is red');
// }

// Пример

btns[0].addEventListener('click', () => {
    // Используется чаще
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    // Удобнее
    btns[1].classList.toggle('red');
});


// Устаревшее свойство
console.log(btns[0].className);


// Делегирование
wrapper.addEventListener('click', (event) => { // event содержит всю инф-ю об элементе на к-м происходит событие
    // console.dir(event.target); // dir позволяет увидеть элеменкт в качестве объекта
    if (event.target && event.target.tagName == "BUTTON") { // сначала проверяем event.target на существование, т.к. некоторые теги его могут не поддерживать
        console.log('Hello');
    }
    // if (event.target && event.target.classList.contains('blue')) { // сначала проверяем event.target на существование, т.к. некоторые теги его могут не поддерживать
    //     console.log('Hello');
    // }
});

// Ещё один способ
wrapper.addEventListener('click', (event) => { // event содержит всю инф-ю об элементе на к-м происходит событие
    if (event.target && event.target.matches("button.red")) { // сначала проверяем event.target на существование, т.к. некоторые теги его могут не поддерживать
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);