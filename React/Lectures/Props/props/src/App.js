import styled from 'styled-components';

import { Component, /* Fragment */ } from 'react';

import './App.css';

// function WhoAmI ({name, surname, link}) { // props - Объект
//     return ( // динамически изменить значение его свойства нельзя, для этого необходимо полностью пересоздать объект
//              // передавать через свойства м/о что угодно
//         <div>
//             <h1>My name is {name.firstName}, surname - {surname()}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }


const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2)
`;

class WhoAmI extends Component { // props - Объект
    constructor(props) {
        super(props); // конструктор необходим только в случае, если у нас производятся какие-то дополнительные действия
        
        // Создание состояния
        this.state = {
            years: 27,
            text: '+++'
        }

        // this.nextYear = this.nextYear.bind(this) // для сохранения контекста вызова
    }

    // nextYear = () => {
    //     console.log('+++');
    //     // this.state.years++; // Невозможно напрямую изменить состояние
    //     this.setState({ // arg - Объект с новым состоянием  Метод вызывает перерисовку всего компонента с новым состоянием (вызов render)
    //         years: this.state.years + 1
    //     }) // состояние изменяется ассинхронно (ради оптимизации приложения)
    // }

    // вариант с синхронным изменением состояния (если каждое новое состояние напрямую зависит от предыдущего)
    nextYear = () => {

        this.setState(state => ({ // неперечисленные ниже свойства set не трогает (благодаря чему text не пропадает)
            years: state.years + 1,
            position: ''
        })) 
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({ // При вызове setState каждый раз вызывается render
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
        <EmpItem active>
            <Button onClick={this.nextYear}>{this.state.text}</Button>
            {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> ещё один способ сохранения контекста вызова*/}
            <Header>My name is {name}, 
            surname - {surname}, 
            age - {years}, 
            position - {position}</Header>
            <a href={link}>My profile</a>
            <form>
                <span>Введите должность</span>
                {/* <input type="text" onChange={this.commitInputChanges}/> */}
                <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/> {/* Такая констркукция позволяет передавать аргументы помимо объекта события */}
            </form>
        </EmpItem>
    )
    }
}
// React.Fragment key = '123' если необходимо тобавить аргумент



const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto
`;


function App() {
  return (
    <Wrapper>
      <WhoAmI name="John" surname='Smith' link="facebook.com"/>
      <WhoAmI name='Alex' surname='Shepard' link="vk.com"/>
    </Wrapper>
  );
}

export default App;
