import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Vote.css';

export class Vote extends Component {

    constructor() {
        super();
        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    render() {
        return (
            <div>

                <div className="content-section implementation splitbutton-demo">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <h3>Vota</h3>
                    <Button label="Forza Italia" icon="pi pi-1" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                    <Button label="PD" icon="pi pi-2" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Movimento 5 Stelle" icon="pi pi-3" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Lega" icon="pi pi-4" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Casapound" icon="pi pi-5" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                </div>
            </div>
        )
    }
}