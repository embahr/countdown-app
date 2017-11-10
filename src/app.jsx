import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: '',
        }
    }

    changeDeadline() { 
       this.setState({ deadline: this.state.newDeadline });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown App</div>
                <div className="App-countdown">
                    Countdown to { this.state.deadline }
                </div>
                <Clock 
                    deadline={ this.state.deadline }
                />
                <div className="App-form">
                    <input 
                        className="App-newdate"
                        placeholder="Enter a new date"
                        onChange={ event => this.setState({ newDeadline: event.target.value })}    
                    />
                    <button 
                        className="App-button"
                        onClick={ () => this.changeDeadline() }>
                        Hit it!
                    </button>
                </div>
            </div>
        )
       
    }
}

export default App;