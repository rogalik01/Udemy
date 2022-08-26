'use strict';

// Любое регулярное выражение состоит из двух частей (pattern(шаблон) и флаги)

// Способы создания регулярного выражения
// 1) С помощью конструктора

// new RegExp('pattern', 'flags'); // Не используется

// 2)
// /pattern/f


// Методы для работы
// const ans = prompt('Enter your name');

// // Пусть хотим найти все буквы n

// const reg = /n/i;
// const reg1 = /n/g; // не работает с search
// // i - хоти найти вне зависимости от регистра
// // g - global (все вхождения)
// // m - многострочный режим (с переносами строки )


// console.log(ans.search(reg)); // возвращает первую позицию найденного результата (если нет, то -1)
// console.log(ans.search(reg1)); // g не работает с search


// const matchReg1 = /n/i;
// const matchReg2 = /n/ig;

// console.log();
// console.log(ans.match(matchReg1)); // возращает массив из найденного куска строки, его индекса и самой строки
// console.log(ans.match(matchReg2)); // возращает массив из найденных кусков строки


// console.log();

// const pass = prompt('Password');
// const pass = "Example";
// console.log(pass.replace(/./g, "*")); // arg1 - что, arg2 - на что
// // . внутри регулярного выражения означает, что мы берём все элементы строки
// // Для взятия именно точки необходимо "экранировать" символ \. , т.е. /\./g, "*"
// // Аналогично с символами \ ^ & |

// console.log('12-34-56'.replace(/-/g, ":"));


// Методы регулярных выражений
// const ans = prompt('Enter your name');
// const reg = /n/ig;

// console.log(reg.test(ans)); // есть ли в arg1 что-то похожее на паттерн из выражения (true/false)

// const ans1 = prompt('Enter your number');
// const reg1 = /\d/i;

// console.log(ans1.match(reg1)); 

// Классы
// \d - цифры
// \w - буквы
// \s - пробелы



// Так, например, с помощью выражений можно вырезать цифровые значения из css
// const width = '200px',
//       reg = /\d/g;
// console.log(width.match(reg));
// console.log(width.match(reg).join(''));


// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// Обратные классы
// \D - не числа
// \W - не буквы
// const str = 'My name is R2D2';
// console.log(str.match(/\W/g));
// console.log(str.match(/\D/g));
// console.log(str.match(/\D/g).join(''));
