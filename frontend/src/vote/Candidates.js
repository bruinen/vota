import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

export class Candidates extends Component {

    constructor() {
        super();
        this.state = {
            filteredCandidates: null
        };

        this.filterCandidates = this.filterCandidates.bind(this);
        this.chosenCandidates = [];
    }

    componentDidMount() {
        this.candidates = this.props.config;
        this.maxCandidates = this.props.maxcandidates;
    }

    filterCandidates(event) {
        setTimeout(() => {

            let results;

            if (event.query.length === 0) {
                results = this.candidates.filter((candidate) => {
                    return !this.chosenCandidates.find(el => el === candidate.name);
                });
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
                <div style={{ fontSize: '16px' }}>{candidate.name}</div>
            </div>
        );
    }

    onDropdownClick(event, i) {
        let dropDown = this.refs['autocomplete-candidate-' + i];
        dropDown.onDropdownClick(event);
        event.stopPropagation();
    }

    onAutocompleteChange(e, i) {
        var stateObject = function () {
            let returnObj = {};
            returnObj['candidate' + i] = e.value.name;
            this.chosenCandidates.push(e.value.name);
            return returnObj;
        };
        let person = this.state['candidate' + i];
        if (person) {
            var index = this.chosenCandidates.indexOf(person);
            this.chosenCandidates.splice(index, 1);
        }
        this.setState(stateObject);
    }

    render() {
        let candidates = [];
        for (let i = 0; i < this.maxCandidates; i++) {
            candidates.push(<AutoComplete key={'autocomplete-candidate-' + i} ref={'autocomplete-candidate-' + i} onClick={(e) => { this.onDropdownClick(e, i) }} value={this.state['candidate' + i]} suggestions={this.state.filteredCandidates} completeMethod={this.filterCandidates} size={30} minLength={1}
                placeholder={(i + 1) + ' _________________________'} itemTemplate={this.itemTemplate.bind(this)} selectedItemTemplate={(e) => (i + 1) + ' ' + e} onChange={(e) => this.onAutocompleteChange(e, i)}>
            </AutoComplete>);
        }
        return (
            <div className='candidates'>
                {candidates}
            </div>);
    }
}