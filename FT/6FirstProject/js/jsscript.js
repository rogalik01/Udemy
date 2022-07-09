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

let wathedMovies = +prompt("How many films have you already watched?", "");
if(wathedMovies < 10) {
    alert("You have wathed quite a modest amount of films.");
} else if (watchedMovies >= 10 && wathedMovies <= 30 ) {
    alert("It's an average amount of seen movies.");
} else if (wathedMovies > 30) {
    alert("You're cinemaddict.");
} else {
    alert("A error has occured.")
}

const personalMovieDB = {
    count: wathedMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < wathedMovies; i++) {
    let movie = safeStringReader("One of the movies you have seen resently:");
    personalMovieDB.movies[movie] = safeStringReader("How do you rate it?", "");
}

console.log(personalMovieDB);
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
*/