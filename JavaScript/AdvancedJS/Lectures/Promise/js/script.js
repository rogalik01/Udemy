'use strict';

// Преимущество в том, что синхронные операции можно использовать по цепочке

// console.log('Request Data');

// const req = new Promise(function(resolve, reject){ // arg1 - правильное выполнение, arg2 - неправильное выполнение
//     setTimeout(() => {
//         console.log('Data preparing');
    
//         const product = {
//             name: 'TV',
//             price: 15
//         };
    
//         resolve(product); // запускается только при положительном исходе
//     }, 2000);
// }); 

// req.then((product) => { // метод, который выполняется на промисе в случае положительного исхода (arg передаётся в resolve)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             product.status = 'Ordered';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('An error occured');
// }).finally(() => { // выполняется независимо от исхода
//     console.log('Finally');
// });

const test = time => {
    return new Promise((resolve) => { // можем передавать и только resolve
        setTimeout(() => resolve(), time);
    }); 
};

//test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => { // Принимает массив с промисами и позволяет убедиться в том, что все промисы выполнились
//     console.log('All');  // возвращает массив результатов в том же порядке, в каком они вызываются
// });

// Promise.race([test(1000), test(2000)]).then(() => { // Аналогичен, но дожидается выполнения лишь одного промиса
//     console.log('Someone');  // возвращает результат первого выполнившегося промиса
// });

const newTest = new Promise((resolve, reject) => {
    console.log('Okay');
    // resolve("Done");
    reject(new Error("Whoops!"));
});

newTest
.then(text => {
    console.log(text);
    return '123';
})
.then(text => {
    console.log(text);
}, () => {
    console.log("An error occured");
    return new Promise((resolve, reject) => {
        console.log("Second Promise");
        reject("Second error");
    });
})
.catch(error => {
    console.log(error);
});

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});