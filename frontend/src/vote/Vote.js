import React, { Component } from 'react';
import { Button } from 'primereact/button';
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
                        return (<Button label={party.label} icon={'pi pi-' + (i + 1)} onClick={this.save} className={'p-button-secondary p-button-' + this.jsonData.config.textDimension} ref='button'></Button>)
                    })}
                </div>
            </div>
        )
    }
}