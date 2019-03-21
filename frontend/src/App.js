import React, { Component } from 'react';
import { Vote } from './vote/Vote';
import './App.css';

class App extends Component {

    constructor(data) {
        super(data);
        this.jsonData = require('' + data.config);
    }

    componentDidMount() {
        this.refs.header.className = this.refs.header.className + ' App-' + this.jsonData.type;
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header' ref='header'>
                    <Vote config={this.jsonData}/>
                </header>
            </div>
        );
    }
}

export default App;
