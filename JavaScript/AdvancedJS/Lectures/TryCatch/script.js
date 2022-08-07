'use strict';

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     // также всегда выполняется
// }

// console.log('still normal'); // вполнится несмотря на ошибку



// Пример многостраничного проекта

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');