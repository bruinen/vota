import React, { Component } from 'react';
import { Party } from './Party';
import { Growl } from 'primereact/growl';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './VotingPaper.css';

export class VotingPaper extends Component {

    constructor(data) {
        super(data);
        this.save = this.save.bind(this);
        this.jsonData = data;
    }

    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    renderParties(group, j) {
        return group.parties.map((party, i) => {
            let buttonProps = Object.assign({});
            buttonProps.key = 'party-' + group.name + '-' + j + i;
            buttonProps.label = party.name;
            buttonProps.icon = 'pi';
            buttonProps.icondata = `data:image/jpeg;base64,${party.image}`;
            buttonProps.className = 'p-button-secondary';
            buttonProps.candidates = party.candidates;
            buttonProps.maxcandidates = party.maxCandidates;
            buttonProps.ref = 'party-' + group.name + '-' + j + i;
            return (
                <Party {...buttonProps} onClick={() => {
                    let button = this.refs[buttonProps.ref];
                    button.putX();
                }}>
                </Party>
            )
        })
    }

    renderCandidate(group, j) {
        if (group.name) {
            var gridRow = { 'gridRow': '1 / ' + (group.parties.length + 1) };
            var isAGrid = '';
            if (group.parties.length > 1)
                isAGrid = 'is-grid';
            let icon;
            if (group.image)
                icon = 'pi';
            let buttonProps = Object.assign({});
            buttonProps.key = 'candidate-' + group.name + '-' + j;
            buttonProps.label = group.name + '|' + group.subtitle;
            buttonProps.icon = icon;
            buttonProps.icondata = `data:image/jpeg;base64,${group.image}`;
            buttonProps.className = 'p-button-secondary first-row ' + isAGrid;
            buttonProps.style = gridRow;
            buttonProps.ref = 'candidate-' + group.name + '-' + j;
            return (
                <Party {...buttonProps} onClick={() => {
                    let button = this.refs[buttonProps.ref];
                    button.putX();
                }}>
                </Party>
            )
        }
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el}></Growl>
                {this.jsonData.config.groups.map((group, j) => {
                    let party, candidate;
                    party = this.renderParties(group, j);
                    candidate = this.renderCandidate(group, j);
                    return <div key={'parties-' + j} className='content-party'>
                        {candidate}
                        {party}
                    </div>
                })
                }
            </div>
        )
    }
}