import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    // myRef = React.createRef();
    // mySecondRef = React.createRef();

    componentDidMount() {
        // this.myRef.current.focus();
        // this.myRef.current.doSmth();
    }

    FocusFirstTI = () => {
        // this.myRef.current.focus();
        if (this.myRef) {
            this.myRef.focus();
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        {/* <input ref={this.myRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> */}
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        {/* <TextInput ref={this.myRef} ></TextInput> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.FocusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }

    setInputRef = elem => {
        this.myRef = elem;
    }
}

class TextInput extends Component {

    doSmth = () => {
        console.log('smth');
    }

    render() {
        return (
            <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
        );
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
