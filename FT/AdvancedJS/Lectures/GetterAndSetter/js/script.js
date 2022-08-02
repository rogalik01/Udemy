"use strict";

// Свойства объекта делятся ещё на две категории:
// свойства-данные
// свойства-аксессоры (геттеры и сеттеры)

const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(number) {
        this.age = number;
    }
};

console.log(person.userAge); // без круглых скобок!
person.userAge = 30;
console.log(person.userAge);
console.log(person.userAge = 99);