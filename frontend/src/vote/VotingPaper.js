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

    renderParties(coalition, j) {
        return coalition.parties.map((party, i) => {

            return (
                <Party key={'party-' + coalition.name + '-' + j + i} label={party.label} onClick={this.save} icon='pi' icondata={`data:image/jpeg;base64,${party.image}`} className={'p-button-secondary'} ref='button'>
                </Party>
            )
        })
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el}></Growl>
                {this.jsonData.config.groups.map((coalition, j) => {
                    let party;
                    party = this.renderParties(coalition, j);
                    return <div key={'parties-' + j} className='content-section implementation'>
                        {party}
                    </div>
                })
                }
            </div>
        )
    }
}