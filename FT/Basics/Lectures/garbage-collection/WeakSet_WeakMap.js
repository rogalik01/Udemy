// Аналогичны обычным Set и Map, но используются ещё реже


// 1
// let user = {name: 'Ivan'};

// user = null;

// console.log(user); // Объект удалён из памяти


// 2
// let user = {name: 'Ivan'};

// const arr = [user];
// user = null;

// console.log(user); 
// console.log(arr[0]); //  сохраняет ссылку на объект

// 3
// let user = {name: 'Ivan'};

// let map = new Map();
// map.set(user, 'data');
// user = null;

// console.log(map.keys()); 

// 4
// У weakMap ключами м=т быть только объекты
// Если ссылка на объект существует только внутри Map, то этот объект будет удалён
// let user = {name: 'Ivan'};

// let wMap = new WeakMap();
// wMap.set(user, 'data');
// user = null;

// console.log(wMap.has(user)); 
// console.log(wMap); // интерпретатор не может определить, что находится внутри структуры данных (ограничение WeakMap)
// // из-за этого у WeakMap доступны только методы get, set, delete и has

// 5 Пример использования (онлайн-чаты)
// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }
//     return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};
// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));



// Коллекция WeakSet аналогична обычному Set, но мы можем добавлять в него ТОЛЬКО объекты
// Объект доступен в коллекции до тех пор, пока он достижим
// Для WeakSet доступны методы add, has и delete 
// Не является перебираемым

// 1 сообщениЯ в чате
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'M'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]); // Не добавится, так как WeakSet всё ещё хранит только уникальные значения
console.log(readMessages.has(messages[0]));
// console.log(readMessages.has(messages[1]));
// console.log(readMessages.has(messages[2]));

messages.shift(); // удаляем первый объект

console.log(readMessages.has(messages[0]));