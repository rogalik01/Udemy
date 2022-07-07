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
