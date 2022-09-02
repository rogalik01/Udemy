// классовые компоненты через Consumer
// import {Component, useState, createContext} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';

// // все дочерние элементы провайдера могут получить доступ к данным контекста
// const dataContext = createContext({ // arg - значение по умолчанию 
//     mail: "name@example.com",
//     text: 'some text'
// }); 

// const {Provider, Consumer} = dataContext; 

// const Form = (props) => {

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                     <InputComponent/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// class InputComponent extends Component {
//     render() {
//         return (
//             <Consumer>
//                 {
//                     value => {
//                         return (
//                             <input
//                                 value={value.mail}
//                                 type="email"
//                                 className='form-control'
//                                 placeholder='name@example.com'/>
//                         )
//                     }
//                 }
//             </Consumer>
//         )
//     }
// }

// function App() {
//     const [data, setData] = useState({
//         mail: "name@example.com",
//         text: 'some text'
//     })

//     return (
//         <Provider value={data}> {/* при отсутствии Provider передаёт значение по умолчанию */}
//         {/* при изменении value перерендериваются все дочерние элементы */}
//             <Form text={data.text}/>
//             <button
//                 onClick={() => setData({
//                     mail: "second@example.com",
//                     text: 'another text'
//                 })}>
//                 Click me
//             </button>
//         </Provider>
//     );
// }

// export default App;
















// классовые компоненты через contextType
// import {Component, useState, createContext} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';

// // все дочерние элементы провайдера могут получить доступ к данным контекста
// const dataContext = createContext({ // arg - значение по умолчанию 
//     mail: "name@example.com",
//     text: 'some text'
// }); 

// const {Provider, Consumer} = dataContext; 

// const Form = (props) => {

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                     <InputComponent/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// class InputComponent extends Component {

//     static contextType = dataContext;

//     render() {
//         return (
//             <input
//                 value={this.context.mail}
//                 type="email"
//                 className='form-control'
//                 placeholder='name@example.com'/>
//         )
//     }
// }

// // InputComponent.contextType = dataContext;

// function App() {
//     const [data, setData] = useState({
//         mail: "name@example.com",
//         text: 'some text'
//     })

//     return (
//         <Provider value={data}> {/* при отсутствии Provider передаёт значение по умолчанию */}
//         {/* при изменении value перерендериваются все дочерние элементы */}
//             <Form text={data.text}/>
//             <button
//                 onClick={() => setData({
//                     mail: "second@example.com",
//                     text: 'another text'
//                 })}>
//                 Click me
//             </button>
//         </Provider>
//     );
// }

// export default App;











// Функциональные компоненты
// import {Component, useState, createContext, useContext} from 'react';
// import {Container} from 'react-bootstrap';
// import './App.css';

// // все дочерние элементы провайдера могут получить доступ к данным контекста
// const dataContext = createContext({ // arg - значение по умолчанию 
//     mail: "name@example.com",
//     text: 'some text'
// }); 

// const {Provider, Consumer} = dataContext; 

// const Form = (props) => {

//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                     <InputComponent/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }

// const InputComponent = () => {

//     const context = useContext(dataContext);

//     return (
//         <input
//             value={context.mail}
//             type="email"
//             className='form-control'
//             placeholder='name@example.com'/>
//     )
// }

// // InputComponent.contextType = dataContext;

// function App() {
//     const [data, setData] = useState({
//         mail: "name@example.com",
//         text: 'some text'
//     })

//     return (
//         <Provider value={data}> {/* при отсутствии Provider передаёт значение по умолчанию */}
//         {/* при изменении value перерендериваются все дочерние элементы */}
//             <Form text={data.text}/>
//             <button
//                 onClick={() => setData({
//                     mail: "second@example.com",
//                     text: 'another text'
//                 })}>
//                 Click me
//             </button>
//         </Provider>
//     );
// }

// export default App;











// Разнос по файлам
import {useState} from 'react';
import Form from './Form';
import dataContext from './context';
import './App.css';

const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    // функция для изменения контекста
    function forceChangeMail() {
        setData({...data, mail: 'test@gmail.com'});
    }

    return (
        <Provider value={data}> {/* при отсутствии параметра value передаёт значение по умолчанию */}
        {/* при изменении value перерендериваются все дочерние элементы */}
            <Form text={data.text}/>
            <button
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
