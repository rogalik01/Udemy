import { Component } from 'react';
import ReactDOM from 'react-dom/client';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.value
        }
    }
    
    setValue = (numb) => {
        if (numb <= 50 && numb >= -50) {
            this.setState({
                counterValue: numb
            })
        }
    }

    increment = () => {
        this.setValue(this.state.counterValue + 1)
    }
    
    decrement = () => {
        this.setValue(this.state.counterValue - 1)
    }

    getRandomInt = () => {
        this.setValue(Math.floor(-50 + Math.random() * 100))
    }

    reset = () => {
        this.setValue(this.props.value)
    }


    render() {
        return (
            <div class="app">
                <div class="counter">{this.state.counterValue}</div>
                <div class="controls">
                    <button onClick={this.increment}>INC</button>
                    <button onClick={this.decrement}>DEC</button>
                    <button onClick={this.getRandomInt}>RND</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
