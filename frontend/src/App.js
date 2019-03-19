import React, { Component } from 'react';
import logo from './logo.svg';
import { Vote } from './vote/Vote.js';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Vote />
                </header>
            </div>
        );
    }
}

export default App;
