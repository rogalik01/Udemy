'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 4000);

// setTimeout(() => {
//     console.log('timeout_4000');
// }, 4000);

// console.log(2);





// let k = 0;

// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }

// count();




setTimeout(() => {
    console.log(1);
}, 0); // выполняется после двойки, т.к. сначала попадает в Web Apis, а потом уже в Call Stack
       // также, если таймаут меньше 4мс, браузер подставляет 4мс ради совместимости

console.log(2);