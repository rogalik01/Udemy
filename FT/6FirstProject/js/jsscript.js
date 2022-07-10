"use strict";
// При объявлении через var переменная как бы существует ещё до фактического объявления.
// Как и функции functiom functionName() {}     (function declaration)
// let functionName = function() {};         (function expression)  Начинает существование только после своего объявления, а вызывается также
// () =>        (Стрелочная функция)
// const calc = (a, b) => a + b ;
// const calc = (a, b) => { return a + b };
/* const calc = (a, b) => { 
    console.log('1');
    return a + b;
}
*/
function safeStringReader (message) {
    let data;
    while (true) {
        data = prompt(message, "");
        if (data != "" && data != null && data.length <= 50) {
            return data;
        } else {
            alert("Incorrect input. Plese try again...");
        }
    }
}

let wathedMovies;

function start() {
    while (wathedMovies =='' || wathedMovies == null || isNaN(wathedMovies)) {
        wathedMovies = +prompt("How many films have you already watched?", "");
    }
}
function rememberMyFilms() {
    for(let i = 0; i < wathedMovies; i++) {
        let movie = safeStringReader("One of the movies you have seen resently:");
        personalMovieDB.movies[movie] = safeStringReader("How do you rate it?", "");
    }
}
function definePersonalLevel() {
    if(wathedMovies < 10) {
        alert("You have wathed quite a modest amount of films.");
    } else if (wathedMovies >= 10 && wathedMovies <= 30 ) {
        alert("It's an average amount of seen movies.");
    } else if (wathedMovies > 30) {
        alert("You're cinemaddict.");
    } else {
        alert("A error has occured.")
    }
}
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre numder ${i}`);
    }
}
const personalMovieDB = {
    count: wathedMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
definePersonalLevel();
rememberMyFilms();
showMyDB();
writeYourGenres();
/*
console.log( undefined || 2 || undefined );


// Работа с метками:
// label:
//     statement

Continue можно использовать только с циклами, Break исспользуется и с блоками кода

foo: {
  console.log('привет');
  break foo;
  console.log('эта строка не будет исполнена');
}

let arr = [5, 5, "Строка", 9, 8, "Строка побольше", 13];
let result = [];
for (let i = 0; result.length != arr.length; i++) {
    if(typeof(arr[i]) == "string") {
        result[i] = arr[i] + " done";
    } else {
        result[i] = +arr[i] * 2;
    }
}
console.log(arr);
console.log(result);
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - i - 1];
}
console.log(result);

    Методы для работы со строками:
.toLowerCase()
.toUpperCase()
.indexOf() - поиск индекса, с которого начинается подстрока (При отсутствии возвращает -1)
.slice(a, b) - с какого по какой индекс вернуть часть строки (b не включается)
    если b не указано, то строка вырезается до конца
    при указании в a и b отриательных значений отсчёт идёт с концап строки влево
.substring(a, b) - аналогично .slice(), Но не поддерживает отрицательные значения и a не может быть больше b
.substr(a, b) - аналогично .substring, но в качестве b указывается длина вырезаемого отрезка

    Методы для работы с числами:
Math.round(a) - округление а до ближайшего целого
parceInt(a) - получение целого числа из строки
    Пример: const test  = "12.2px";
            console.log(parseInt(test));
    Результат: 12
parceFloat(a) - получение дробного числа из строки
*/