// 'use strict';

const app = '123'; // выдаст ошибку из-за сторонней библиотеки

// Рассмотрим два способа создания модулей ч/з нативную реализацию
// 1) Использование анонимной самовызывающейся функции

const number = 1;

(function(){ // function-expression
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);


// 2) Использование объектного интерфейса
const user = (function(){
    const private = function() {
        console.log("I am private!");
    };

    return {
        sayHello: private
    };
}());

user.sayHello();