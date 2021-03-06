import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VotingPaper } from './vote/VotingPaper';
import { TabMenu } from 'primereact/tabmenu';
import './App.css';

class App extends Component {

    constructor(data) {
        super(data);
        this.jsonData = require('' + data.config);
        this.state = {
            items: [
            ],
            activeItem: { label: this.jsonData.votingPapers[0].name }
        };
        this.jsonData.votingPapers.map((votingPaper) => {
            return this.state.items.push({ label: votingPaper.name })
        });
    }

    componentDidMount() {
        const tabs = ReactDOM.findDOMNode(this).querySelectorAll('.p-menuitem-link');
        tabs[0].click();
        this.jsonData.votingPapers.map((votingPaper, i) => {
            tabs[i].className = tabs[i].className + ' App-' + votingPaper.type;
            return this.refs['header' + i].className = this.refs['header' + i].className + ' App-' + votingPaper.type;
        })
    }

    render() {
        return (
            <div className='App'>
                <div className="content-section implementation">
                    <TabMenu model={this.state.items} activeItem={this.state.activeItem} onTabChange={(e) => {
                        this.setState({ activeItem: e.value });
                    }
                    } />
                </div>
                {this.jsonData.votingPapers.map((votingPaper, i) => {
                    return (<header key={'header' + i} className='App-header' ref={'header' + i} style={votingPaper.name !== this.state.activeItem['label'] ? { 'display': 'none' } : {}}>
                        <VotingPaper config={votingPaper} />
                    </header>)
                })}
            </div>
        );
    }
}

export default App;
