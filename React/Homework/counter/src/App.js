import { /* Component, */ useState } from 'react';
import React from 'react';


// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             counterValue: this.props.value
//         }
//     }
    
//     setValue = (numb) => {
//         if (numb <= 50 && numb >= -50) {
//             this.setState({
//                 counterValue: numb
//             })
//         }
//     }

//     increment = () => {
//         this.setValue(this.state.counterValue + 1)
//     }
    
//     decrement = () => {
//         this.setValue(this.state.counterValue - 1)
//     }

//     getRandomInt = () => {
//         this.setValue(Math.floor(-50 + Math.random() * 100))
//     }

//     reset = () => {
//         this.setValue(this.props.value)
//     }


//     render() {
//         return (
//             <div class="app">
//                 <div class="counter">{this.state.counterValue}</div>
//                 <div class="controls">
//                     <button onClick={this.increment}>INC</button>
//                     <button onClick={this.decrement}>DEC</button>
//                     <button onClick={this.getRandomInt}>RND</button>
//                     <button onClick={this.reset}>RESET</button>
//                 </div>
//             </div>
//         )
//     }
// }













// const App = ({value}) => {

//     const [counterValue, setCounterValue] = useState(value);
    
//     function changeCounterValue(numb) {
//         if (numb <= 50 && numb >= -50) {
//             setCounterValue(counterValue => numb);
//         }
//     }

//     function increment() {
//         changeCounterValue(counterValue + 1)
//     }
    
//     function decrement() {
//         changeCounterValue(counterValue - 1)
//     }

//     function getRandomInt() {
//         changeCounterValue(Math.floor(-50 + Math.random() * 100))
//     }

//     function reset() {
//         changeCounterValue(value)
//     }


//     return (
            // <div className="app">
            //     <div className="counter">{counterValue}</div>
            //     <div className="controls">
            //         <button onClick={increment}>INC</button>
            //         <button onClick={decrement}>DEC</button>
            //         <button onClick={getRandomInt}>RND</button>
            //         <button onClick={reset}>RESET</button>
            //     </div>
            // </div>
//     )
// }

const useCounter = (min, max) => {
    const [value, setValue] = useState(null);

    const incCounter = () => {
        if (value < max) {
            setValue(value => value + 1)
        }
    }
  
    const decCounter = () => {
        if (value > min) {
            setValue(value => value - 1)
        }
    }

    const rndCounter = () => {
        setValue(+(Math.random() * (max - min) + min).toFixed(0))
    }

    const resetCounter = () => {
        setValue(min)
    }

    React.useEffect(() => {
        fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
            .then(res => res.text())
            .then(res => setValue(+res))
            .catch(err => console.log(err))
    }, [])
      
    return {value, incCounter, decCounter, rndCounter, resetCounter}
}

const Counter = () => {
    const counter = useCounter(-10, 50);

    return (
      <div className="component">
        <div className="counter">{counter.value}</div>
        <div className="controls">
          <button onClick={counter.incCounter}>INC</button>
          <button onClick={counter.decCounter}>DEC</button>
          <button onClick={counter.rndCounter}>RND</button>
          <button onClick={counter.resetCounter}>RESET</button>
        </div>
      </div>
    )
}

const RndCounter = () => {
    const counter = useCounter(0, 30);

    return (
      <div className="component">
        <div className="counter">{counter.value}</div>
        <div className="controls">
          <button onClick={counter.rndCounter}>RND</button>
          <button onClick={counter.resetCounter}>RESET</button>
        </div>
      </div>
    )
}

const App = () => {
    return (
        <>
            <Counter/>
            <RndCounter/>
        </>
    )
}
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
