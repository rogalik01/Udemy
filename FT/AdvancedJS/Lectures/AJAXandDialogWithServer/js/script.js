'use strict';

// Используется для ассинхронной работы сос траницей без её перезагрузки
// Существует несколько методов реализования 

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('change') // возникает, когда инпут выходит из фокуса (Пр. кликнули курсором по другому объекту или нажали Tab)
inputRub.addEventListener('input', () => { // возникает каждый раз, когда что-то вводится или удаляется в input (более универсальное)
    // запрос на сервер
    const request = new XMLHttpRequest();



    // методы 
    request.open('GET', 'js/current1.json'); // собирает настройки, которые помогут в будущем сделать запрос
    // arg1 - method ("GET", "POST" и т.д.)
    // arg2 - url путь относительно inde.html (файл и т.п.)
    // arg3 - ассинхронность (да или нет)  AJAX запросы по умолчанию являются ассинхронными
    // arg4 - логин
    // arg5 - пароль

    // информация о запросе
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send(); // в Post должен быть некий body
    
    
    
    // свойства
    // status - статус нашего запроса (404, 0, 200, 403 и т.д.)
    // statusTex - текстовое описание статуса (Not found и т.д.)
    // response 
    // readyState - текущее состояние нашего запроса



    // события
    request.addEventListener('readystatechange', () => { // вызывается поэтапно от 0 до 4
        if(request.readyState === 4 && request.status === 200) { // все данные пришли и запрос успешен
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Something went wrong";
        }
    });


    request.addEventListener('load', () => { // срабатывает один раз, когда запрос готов (необязательно успешно)
        if(request.status === 200) { // все данные пришли и запрос успешен
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Something went wrong";
        }
    });
});