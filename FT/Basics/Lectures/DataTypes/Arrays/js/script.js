const arr = [0, 1, 2, 3, 6, 8];

// console.log(arr.length); // Свойство lenght получается из индекса последнего элемента массива + 1

// console.log(arr);
// arr.pop(); // Удаляет последний элемент из массива.
// console.log(arr);
// arr.push(10); // Добавляет элемент в конце массива.
// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }

arr.forEach(function(item, i, arr) { // В кач-ве аргумента принимает ф-ю, к-я б-т вып-ся для каждого эл-та массива
    console.log(`${i}: ${item} is contained inside of ${arr}`)
}); //function принимает в себя 3 аргумента (эл-т массива, его номер по порядку, ссылка на перебираемый массив)

// Чаще на практике используется forEach, но в for...of можно использовать break и continue

// arr.map() аналогичен forEach, но также способен модифицировать элементы массива. (возвращает новый массив)
// arr.filter() также трансформирует массив

const str = prompt("", "");
const products = str.split(", "); // делит строку на элементы массива, в качестве аргумента указывается
    // символ, через который в строке перечисляются элементы
console.log(products);
products.sort(); // Регистр влияет на сортировку. Заглавные буквы будут "выше" по значимости
console.log(products.join(";\n")); // обратная операция

/* 
function unique(arr) { // удаляем из массива повторяющиеся значения
    return Array.from(new Set(arr));
}
*/