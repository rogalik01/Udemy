// API - Application Programming Interface (готовые методы и свойства)
// DOM API - различные методы, позволяющие работать с элементами на странице

// Будем разбирать Fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1') // классический get запрос, который обращатся к серверу (возвращает promise в формате json)
    .then(response => response.json()) // преобразует json в js-объект (возвращает всё также promise)
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', { // настройки запроса на post
    method: "POST",
    body:  JSON.stringify({name: 'ALex'}), // объект преобразуется в JSON-формат и отправляется при помощи fetch
    headers: { // заголовки отправляемого объекта
        'Content-type': 'application/json'
    }
})
    .then(response => response.json()) 
    .then(json => console.log(json));