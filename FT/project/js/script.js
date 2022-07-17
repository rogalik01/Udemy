/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advertisements = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector(".promo__genre"),
          movieList = document.querySelectorAll('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // форма, у которой есть класс add
          addInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type="checkbox"]'),
          trash = document.querySelectorAll('.delete');
    
    addForm.addEventListener('submit', (event)=> {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) { // Если не пустая строка
    
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("You've added favorite film");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset(); // сбросить форму
    });
    
    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage =  'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    
    function createMovieList (films, parent) {
        parent[0].innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent[0].innerHTML += `
                <li class="promo__interactive-item">${i + 1}) ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => 
            item.addEventListener('click', (event) => {
                films.splice(i, 1); // удалить arg2 аргументов, начиная с arg1
                item.parentElement.remove();
                createMovieList(films, parent);
        }));
    }

    deleteAdv(advertisements);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
