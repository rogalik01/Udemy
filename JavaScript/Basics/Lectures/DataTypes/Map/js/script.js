'use strict';

const user = {
    4: 'Alex', 
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
console.log(user);
console.log(typeof(Object.keys(user)[0])); // 4 превращается в строку


// MAP - специфическая структура данных, похожая на объект, но вместо свойств у неё может использоваться и объект и массив и функция, и т.д.
// Map всё также является объектом
// Карты поддерживают чёткий порядок своих элементов
// Карта есть массив массивов
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map();

map.set(shops[0], 5000); // arg1 - ключ, arg2 - значение
map.set(shops[1], 50); // arg1 - ключ, arg2 - значение
map.set(shops[2], 500); // arg1 - ключ, arg2 - значение

// аналог (работает, т.к. set возращает нам наш map)
// map.set(shops[0], 5000)
//     .set(shops[1], 50)
//     .set(shops[2], 500);

// аналог через forEach
// const budget = [5000, 50, 500];
// shops.forEach((shop, i ) => {
//     map.set(shop, budget[i]);
// });

console.log(map);
console.log();
console.log(map.get(shops[0]));
console.log(map.has(shops[0])); // существует ли объект внутри карты
// map.delete(key);
// map.clear(key); // полностью очищает карту
// console.log(map.size); // кол-во объектов

// можно задавать карту при её объявлении
const map1 = new Map([
    [{paper:400}, 8000] 
]);
console.log(map1);

// Перебор элементов карты:
console.log('\nПервый способ перебора (получаем ключи)');
map.keys(); // Возвращает итерируемый объект по ключам
for (let shop of map.keys()) {
    console.log(shop);
}

console.log('\nПример:');
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);


console.log('\nВторой способ перебора (получаем значения)');
for (let price of map.values()) {
    console.log(price);
}


console.log('\nТретий способ перебора (получаем свойства и значения)');
for (let price of map.entries()) {
    console.log(price);
}

console.log('\nЧасто с методом entries() используется деструктуризация');
for (let [shop, price] of map.entries()) {
    console.log(price, shop);
}


console.log('\nЧетвёртый способ перебора (forEach)');
map.forEach((value, key, map) => {
    console.log(key, value);
});


// Создать карту из объекта
const newUser = {
    4: 'Alex', 
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log('');
const userMap = new Map(Object.entries(newUser));
console.log(userMap);


// Создать объект из карты
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
