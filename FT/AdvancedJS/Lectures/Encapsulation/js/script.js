'use strict';

// отделение и сокрытие от внешнего мира внутренностей программы (переменных функций и пр.) наз-ся инкапсуляцией

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`User's name: ${this.name}, age: ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name = 'Alex';
// ivan.say();



// function User(name, age) {
//     this.name = name;
//     let userAge = age; // недоступна снаружи (можно получить доступ только через get и set)

//     this.say = function() {
//         console.log(`User's name: ${this.name}, age: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof(age) === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Invalid data");
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.userAge = 30;
// ivan.name = 'Alex';

// ivan.say();
// console.log(`\n`);

// console.log(ivan.getAge());
// ivan.setAge(30);
// ivan.setAge(303);
// console.log(ivan.getAge());
// ivan.say();



// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age; // делаем скрытым (условно)
//     }

//     surname = 'Chel'; // также свойство, просто без конструктора
//     #middlename = 'Pchel'; // решётка делает свойство скрытым

//     say = () => {
//         console.log(`User's name: ${this.name} ${this.#middlename} ${this.surname}, age: ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof(age) === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log("Invalid data");
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);

// ivan.say();

// console.log(ivan.middlename);

// console.log(`\n`);

// class Homework {
//     #hiddenProperty = 'Smth'

//     get hiddenP() {
//         return this.#hiddenProperty;
//     }
//     set hiddenP(text) {
//         this.#hiddenProperty = text;
//     }
// }

// const homework = new Homework();
// console.log(homework.hiddenP);
// homework.hiddenP = 123;
// console.log(homework.hiddenP);