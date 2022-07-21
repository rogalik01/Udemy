'use strict';

// Основная особенность Set - каждое значение появляется не более одного раза
// В отличие от массивов у Set отсутствуют ключи при значениях

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

console.log(set);
console.log('');



const arr1 = ['Alex', 'Ann', 'Oleg', 'Alex'];
const set1 = new Set(arr1);

set1.add('Ivan')   // Также возвращает наш set
    .add('Oleg'); 

console.log(set1);

// Базовые функции (аналогичны картам)

// set.delete(value);
// set.has(value);
// set.clear();
// set.size; 

for(let value of set1) {
    console.log(value);
}

console.log('');

set1.forEach((value, valueAgaing, set) => { // Второй аргумент не отличается от первого
    console.log(value, valueAgaing);
});

console.log('');

console.log(set1.values());
console.log(set1.keys()); // существует для совместимости
console.log(set1.entries()); // существует для совместимости 

// Array.from() для преобразования Set в массив

function unique(arr) { // удаляем из массива повторяющиеся значения
    return Array.from(new Set(arr));
}
console.log(unique(arr1));