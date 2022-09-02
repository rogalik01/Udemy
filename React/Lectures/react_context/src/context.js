import {createContext} from 'react';


// все дочерние элементы провайдера могут получить доступ к данным контекста
const dataContext = createContext({ // arg - значение по умолчанию 
    mail: "name@example.com",
    text: 'some text'
}); 

export default dataContext;