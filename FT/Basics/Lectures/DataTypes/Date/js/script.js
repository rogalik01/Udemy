'use strict';

// все даты хранятся в мс (с начала 1970 года)

const now = new Date(); // при передаче без аргумента получаем текущую дату
const now1 = new Date('2022-07-23'); // при передаче опредёленной даты получаем эту дату в полночь
const now2 = new Date(2022, 6, 23, 20); // месяцы считаются с нуля (0 - январь), также учитывается именно время по Гринвичу
const now3 = new Date(0); // мс 
                          // для получения дат до 1970 года используем отрицательные значения



console.log(now);
console.log(now1);
console.log(now2);
console.log(now3);

// Методы на получение компонентов даты
// console.log(now.getFullYear()); // 2022         При передаче даты год обязательно должен быть 4-значным
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// console.log(now.getDay()); // номер дня недели (нумерация идёт от восресенья(0))

// Вышеперечисленные методы возвразают время по местному часовому поясу
// console.log(now.getUTCHours()); 

console.log('\n\n');
console.log(now.getTimezoneOffset()); // Разница в минутах между UTC и местным временем
console.log(now.getTime()); // количество мс с 1970.01.01 00:00



// Методы на установление даты (аналогичны вышеперечисленным, но с приставкой set)
console.log(now.setHours(18, 59)); // аргументы, следующие после первого будут устанавливать минуты, секунды и т.д.
// если, например, укажем больше 23 часов, то этот недочёт автоматически исправится и будут установлены уже последующие дни 
console.log(now);


// Парсинг дат
const now5 = new Date('2022-07-23');
// new Date.parse('2022-07-23'); // данный мето ничем не отличается


// Вычитание дат
// 1
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; 
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);