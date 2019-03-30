import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

export class Candidates extends Component {

    constructor() {
        super();
        this.state = {
            filteredCandidates: null
        };

        this.filterCandidates = this.filterCandidates.bind(this);
    }

    componentDidMount() {
        this.candidates = this.props.config;
    }

    filterCandidates(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.candidates];
            }
            else {
                results = this.candidates.filter((candidate) => {
                    return candidate.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredCandidates: results });
        }, 250);
    }

    itemTemplate(candidate) {
        let image;
        if (candidate.image)
            image = <img alt={candidate.name} src={`data:image/jpeg;base64,${candidate.image}`} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />;
        return (
            <div className="p-clearfix">
                {image}
                <div style={{ fontSize: '16px', float: 'right', margin: '10px 10px 0 0' }}>{candidate.name}</div>
            </div>
        );
    }

    render() {
        return (<div className='candidates'><AutoComplete value={this.state.candidate} suggestions={this.state.filteredCandidates} completeMethod={this.filterCandidates} size={30} minLength={1}
            placeholder="________________________" itemTemplate={this.itemTemplate.bind(this)} onChange={(e) => this.setState({ candidate: e.value.name })} /><AutoComplete value={this.state.candidate} suggestions={this.state.filteredCandidates} completeMethod={this.filterCandidates} size={30} minLength={1}
                placeholder="________________________" itemTemplate={this.itemTemplate.bind(this)} onChange={(e) => this.setState({ candidate: e.value.name })} /></div>);
    }
}