let numberOfFilms = +prompt("How many films have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie = prompt("One of the films you have seen resently:", "");
personalMovieDB.movies[movie] = prompt("How do you rate it?", "");
movie = prompt("One of the films you have seen resently:", "");
personalMovieDB.movies[movie] = prompt("How do you rate it?", "");

console.log(personalMovieDB);

console.log( undefined || 2 || undefined );


/* Работа с метками:
label:
    statement

Continue можно использовать только с циклами, Break исспользуется и с блоками кода

foo: {
  console.log('привет');
  break foo;
  console.log('эта строка не будет исполнена');
}
*/
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