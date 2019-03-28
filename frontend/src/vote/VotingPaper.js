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
            return (
                <Party key={'party-' + group.name + '-' + j + i} label={party.label} onClick={this.save} icon='pi' icondata={`data:image/jpeg;base64,${party.image}`} className={'p-button-secondary'} ref='button'>
                </Party>
            )
        })
    }

    renderCandidate(group, j) {
        if (group.name) {
            var gridRow = { 'gridRow': '1 / ' + (group.parties.length + 1) };
            return (
                <Party key={'candidate-' + group.name + '-' + j} label={group.name} onClick={this.save} className={'p-button-secondary first-row'} style={gridRow} ref='candidate'>
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