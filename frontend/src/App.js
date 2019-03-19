import React, { Component } from 'react';
import { Vote } from './vote/Vote.js';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Vote />
                </header>
            </div>
        );
    }
}

export default App;
