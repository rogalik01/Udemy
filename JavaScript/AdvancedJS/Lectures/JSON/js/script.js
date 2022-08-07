'use strict';

// JS object notation
// Текстовый формат обмена и хранения данных
// Набор пар ключ-значение
// В качестве значений могут быть объекты, массивы, числа, строки, лог.значение или null
// В итоге можем получть небольшую реляционную бд
// Главное правило - все сущности д/б записаны в двойные кавычки 

// Ранее для общения с сервером использовался формат XML

// const person = {
//     name: 'Alex',
//     tel: '+744444444'
// }; // объект необходимо передать на сервер

// console.log(JSON.stringify(person)); // Преобразование для передачи на сервер
// console.log(JSON.parse(JSON.stringify(person))); // Обратное Преобразование для передачи с сервера


const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));
// создаётся глубокая копия объекта (не поверхностная)
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);