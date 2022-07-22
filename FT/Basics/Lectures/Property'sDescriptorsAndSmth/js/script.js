'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

//   Флаги
// writable - если параметр стоит в true, то свойство можно изменить, иначе только для чтения
// enumerable - если в true, то свойство будет перечисляться в циклах, иначе они будут игнорироваться
// configurable - если в true, то свойство можно будет удалить, а атрибут его можно будет удалить, иначе делать этого будет нельзя

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // arg1 - расс-й объект, arg2 - рассм-е свойство
Object.defineProperty(user, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'name')); // arg1 - расс-й объект, arg2 - рассм-е свойство
// user.name = 'Natasha';
// Также с defineProperty можно создавать новые свойства объекта 
// если не указывать значения флагов, то они установятся в false
Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender') + `\n`); // arg1 - расс-й объект, arg2 - рассм-е свойство


// Задача:
// Сделать так, чтобы пользователь не мог изменять свою дату рождения после её указания
// Object.defineProperty(user, 'birthday', {value: prompt('Date of birth'), enumerable: true, configurable: true});

// Задача:
// Перебрать в цикле только значения объекта без его методов
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let key in user) {
    console.log(key);
}

// Создать свойство, которое после создания нельзя ни удалить, ни изменить его флаг и значения
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// После установления configurable в false вы уже не сможете изменить ни значение свойства, ни его флаги

Object.defineProperties(user, {
    name: {writable: false},
    surname: {configurable: false}
});