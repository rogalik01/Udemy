'use strict';
 // Лексическое окружение - некий внутренний (скрытый, технический) объект функции, блока или скрипта 
 // Оно делится на внутреннюю и внешнюю части
 // Внутренняя часть (env record) хранит локальные переменные функции и this
 // После выполнения функции её лекс. окр. уничтожается
 // Замыкание функции (её окружение) (closure) формируется из лексического окружения места, где она была создана
// let number = 5;

// function logNumber() {
//     console.log(number);
// }

// number = 6;

// logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1; // сохраняет ссылку на counter, как и на всё, что было ей доступно ей в момент создания
        return counter;
    };
    return myFunction;
}

const increment = createCounter(); // increment хранит ссылку на counter 
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);