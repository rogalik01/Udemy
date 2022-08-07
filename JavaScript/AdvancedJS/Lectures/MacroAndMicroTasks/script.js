setTimeout(() => {
    console.log('timeout'); // 4
});

Promise.resolve() // промис уже выполнился успешно
    .then(() => console.log('promise')); // 2

queueMicrotask(() => console.log('wow'));

Promise.resolve() // промис уже выполнился успешно
    .then(() => console.log('promise2')); // 3
    
console.log('code'); // 1

// После выполнения макрозадачи код выполняет все микрозадачи перед тем, как выполнить слудующую макро



// Пример очереди из макро- и микрозадач
// () => {} макрозадача
// Все микрозадачи (then, catch, finally, await, queueMicrotask)
// render
// () => {}
// Все микрозадачи (then, catch, finally, await, queueMicrotask)
// render
// () => {}

// отслеживание координат мыши - макрозадача