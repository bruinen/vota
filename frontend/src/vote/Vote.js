import React, { Component } from 'react';
import { ButtonData } from './ButtonData';
import { Growl } from 'primereact/growl';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Vote.css';

export class Vote extends Component {

    constructor(data) {
        super(data);
        this.save = this.save.bind(this);
        this.jsonData = data;
    }

    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    render() {
        return (
            <div>
                <div className='content-section implementation splitbutton-demo'>
                    <Growl ref={(el) => this.growl = el}></Growl>
                    {this.jsonData.config.parties.map((party, i) => {
                        return (<ButtonData key={'party-' + i} label={party.label} onClick={this.save} icon='pi' icondata={`data:image/jpeg;base64,${party.image}`} className={'p-button-secondary p-button-' + this.jsonData.config.textDimension} ref='button'>
                        </ButtonData>)
                    })}
                </div>
            </div>
        )
    }
}