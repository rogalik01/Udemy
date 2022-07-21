'use strict';

// BigInt нельзя использовать с встроенными командами Math
// Если BigInt, заходящий за рамки Number.MAX_SAFE_INTEGER, преобразовать в Number, то избыточная часть будет отброшена
// Нельзя смешивать в операциях BigInt и обычные числа (за исключением операторов сравнения)
// Спокойно можно использовать + * - ** % а также побитовые операторы
// Деление уже сложнее

console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1

const bigInt = 123333331231231231231231231231212347190274091n; // С n на конце получаем bigInt

const sameBigInt = BigInt(123333331231231231231231231231212347190274091); // Аналогично, но в эту команду также можем передавать и строки

console.log(typeof(bigInt));
console.log(typeof(sameBigInt));

console.log('');

// console.log(5n + 3); // выдают ошибку
// console.log(Math.round(5n));

console.log(1n + 3n); // работает нормально
console.log(5n / 2n); // возвращает округлённый результат без дробной части
console.log(2n > 1); 
console.log(2n > 5); 
console.log(2n == 2); 
console.log(2n === 2); // false, т.к.  разные типы данных


console.log('');


// Способ сложения BigInt с обычным числом 
let bigInt1 = 1n;
let number = 2;

console.log(bigInt1 + BigInt(number));
// или наоборот
console.log(Number(bigInt1) + number);
// console.log(+bigInt1 + number);  // Не сработает