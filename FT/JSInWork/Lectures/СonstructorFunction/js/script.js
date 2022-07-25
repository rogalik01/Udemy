'use strict';

// const num = new Number(3);
// console.log(num);

// const func = new Function(3);
// console.log(func);

function User(name, id) { // Функция-конструктор (с её помощью можжем создавать новых пользователей) 
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function() { // Все потомки, объявленные после объявления метода, унаследуют его
    console.log(`User ${this.name} has left`);
};

const ivan = new User('Ivan', 20); // в переменную возращается объект
const alex = new User('Alex', 20); // в переменную возращается объект

console.log(ivan);
console.log(alex);

console.log();

ivan.hello();
alex.hello();

console.log();

ivan.exit();

// Всё вышеперечисленное устарело. Нынче для данных нужд используются классы, которые, по сути, обладают тем же функционалом
// Классы появились только в ES6

class UserClass { // Функция-конструктор (с её помощью можжем создавать новых пользователей)
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello, ${this.name}`);
    }
    exit() {
        console.log(`User ${this.name} has left`);
    }
}