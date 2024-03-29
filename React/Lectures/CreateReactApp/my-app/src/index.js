// npx create-react-app my-app
// cd my-app
// npm start
// Babel переводит весь код в js

import React, {StrictMode} from 'react'; // необходимо имортировать только в самый главный файл (index.js)
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';


const elem = <h2>Hello World!</h2>; // React-элемент
// Аналогично
// const elem = React.createElement('h2', /* null */ {className: 'greetings'}, 'Hello World!'); // arg1 - название тега, arg2 - названия классов, arg3 - содержимое тега



const text = 'Hello World!' ;
// const elem2 = ( // div обязателен, т.к. внутри каждого элемента всегда должен быть один корневой
//     // <div> 
//     //     <h2 >Текст: {text } {2+2} {[23, 14, 'f']} </h2>
//     //     <input type="text" />
//     //     <button tabIndex='0'>Click</button> 
//     // </div>
        <App/>    
// );

/* 
    {} внутри вставок html Заменяет нам ``
    Однако помещать объекты внутри скобок нельзя, т.к. всё внутри скобок преобразуется в текст
    Все атрибуты внутри тегов используются, как обычно, но писать их необходимо  через camelCase
    Исключения составляют два тега (class -> className, for -> htmlFor)
    <button></button>
    <button/>  второй вариант позволяет создавать кнопки без контента
*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // должна вызываться только один раз на самом верхнем уровне приложения
    <StrictMode>
        <App/>
    </StrictMode>
); // StrictMode - инструмент для обнаружения потенциальных проблем в нашем приложении
   // (в основном для обнаружения устаревших и небезопасных конструкциях, а также о неких побочных эффектах)
   // полезен при переходе старых проектов на новую версию React


/* 
    Компоненты - самостоятельные блоки пользовательского интерфейса, которые могут иметь собственное поведение (м-т переиспользоваться и перемещаться по файлам) 
    Элементы - неизменяемые (нельзя менять классы и прочее) структурные частички компонентов  
    Для изменения элемента н-о полностью заново реализовать его на странице
    React-компоненты пишутся с большой буквы
    Компоненты - это функции (реже классы), которые могут возвращать jsx-элементы
    Создавать компоненты принято в отдельных файлах, где их и экспортировать
*/

