import {Component, StrictMode} from 'react';
import './App.css';


const Header = () => { // простейший React-компонент
    return <h2>Hello World!</h2>
}

// const Field = () => {
//     const holder = 'Enter here';
//     const styledField = { // для задания inline-стилей
//         width: '300px'
//     }
//     return <input
//     placeholder={holder}
//     type="text"
//     style = {styledField}/>
// }

class Field extends Component { // Необходимо наследовать поведение базового класса из библиотеки React
    render() {
        const holder = 'Enter here';
        const styledField = { // для задания inline-стилей
            width: '300px'
        }
        return <input
            placeholder={holder}
            type="text"
            style = {styledField}/>
    }
}

function Btn() {
    const text = 'Log in';
    const logged = false;

    // const res = () => {
    //     return 'Log in'
    // }
    // const p = <p>{res()}</p>

    return <button>{logged ? 'Enter' : text}</button>
    // Внутри фигурных скобок нельзя использовать if() else, но можно тернарный оператор
}

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/> 
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
