'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const arr = ['b', 'a', 'c'];

// в for in перебор идёит необязательно по порядку
// for in при использовании на объекте, массиве или строке будет работать с каждой сущностью по порядку, которая является перечисляемой, т.е.
//      enumerable: true
for (let key in user) {
    console.log(user[key]);
}
console.log('');
for (let key in arr) {
    console.log(arr[key]);
}
console.log();
const str = 'srting';
for (let key in str) {
    console.log(str[key]);
}
// При переборе массивов и строк может случиться так, что перебор будет идти не по порядку
console.log();

// for of проходится по значениям перебираемого объекта (строгое соответствие порядка в переборе)
// Тут в key сразу лежит готовое значение, а не его ключ
// Также из перебора исключаются все унаследованные методы
// Объекты являются итерируемыми (перебираемыми) только если у них есть значение Symbol(Symbol.iterator)
// Перебираемые: Массивы, строки, типизированные массивы, SAT, MAP и типизированные DOM-коллекции
// нельзя использовать break и continue

for (let key of arr) {
    console.log(key);
}
console.log();


const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
};
// salaries[Symbol.iterator] = function() {
//     return {
//         next() {
//         }
//     };
// }; // Позволяет в дальнейшем перебирать этот объект

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if(this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current}; // следующее значение на следующий перебор, которое на 500 больше
            } else {
                return {done: true};
            }
        }
    };
}; // Позволяет в дальнейшем перебирать этот объект

for (let res of salaries) {
    console.log(res);
}


// или

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());