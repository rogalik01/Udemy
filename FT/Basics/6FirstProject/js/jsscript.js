"use strict";
// При объявлении через var переменная как бы существует ещё до фактического объявления.
// Как и функции functiom functionName() {}     (function declaration)
// let functionName = function() {};         (function expression)  Начинает существование 
//      только после своего объявления, а вызывается также
// () =>        (Стрелочная функция)
// const calc = (a, b) => a + b ;
// const calc = (a, b) => { return a + b };
/* const calc = (a, b) => { 
    console.log('1');
    return a + b;
}
*/

// Ctrl + Shift + L - выделить все вхождения выделенной строки


function safeStringReader (message) {
    let data;
    while (true) {
        data = prompt(message, "").trim();
        if (data != "" && data != null && data.length <= 50) {
            return data;
        } else {
            alert("Incorrect input. Plese try again...");
        }
    }
}

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt("How many films have you already watched?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already watched?", "");
        }
    },

    writeYourGenres: () => {
        // for (let i = 1; i <= 3; i++) {
        //     while (true) {
        //         let res = prompt(`Your favorite genre numder ${i}`, '');
        //         if (res != null && res.trim() != "") {
        //             personalMovieDB.genres[i - 1] = res.trim();
        //             break;
        //         } else {
        //             console.log("Incorrect input");
        //         }
        //     }
        // }
        while (true) {
        let res = prompt(`Enter your favorite genres separated by commas`, '');
            if (res != null && res.trim() != "") {
                personalMovieDB.genres = res.split(", ");
                break;
            } else {
                console.log("Incorrect input");
            }
        }
    },

    showMyDB: function() {
        if (this.privat == false) {
            console.log(this);
        }
    },

    definePersonalLevel: function() {
        if(this.count < 10) {
            alert("You have watched quite a modest amount of films.");
        } else if (this.count >= 10 && this.count <= 30 ) {
            alert("It's an average amount of seen movies.");
        } else if (this.count > 30) {
            alert("You're cinemaddict.");
        } else {
            alert("A error has occured.");
        }
    },

    rememberMyFilms: function() {
        for(let i = 0; i < this.count; i++) {
            let movie = safeStringReader("One of the movies you have seen resently:");
            personalMovieDB.movies[movie] = safeStringReader("How do you rate it?", "");
        }
    },

    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    showMyGenres: function() {
        this.genres.forEach(function show(value, index) {
            console.log(`Favorite genre number ${index + 1} is ${value}.`);
        });
    }
};

personalMovieDB.start();
console.log(personalMovieDB.count + ' it is strange');
personalMovieDB.definePersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyGenres();










/*
// Работа с метками:
// label:
//     statement

Continue можно использовать только с циклами, Break исспользуется и с блоками кода

foo: {
  console.log('привет');
  break foo;
  console.log('эта строка не будет исполнена');
}
*/
