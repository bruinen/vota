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

                    <Button label="Forza Italia" icon="pi pi-1" onClick={this.save} className="p-button-secondary p-button-grand"></Button>
                    <Button label="PD" icon="pi pi-2" onClick={this.save} className="p-button-secondary p-button-grand"></Button>
                    <Button label="Movimento eewe 5 StelleMovimento 5 StelleMovimento 5 StelleMovimento 5 StelleMovimentodedede" icon="pi pi-3" onClick={this.save} className="p-button-secondary p-button-little"></Button>
                    <Button label="Lega" icon="pi pi-4" onClick={this.save} className="p-button-secondary p-button-grand"></Button>
                    <Button label="Fratelli d'ItaliaFratelli d'ItaliaFratelli d'Italia" icon="pi pi-5" onClick={this.save} className="p-button-secondary p-button-middle"></Button>
                </div>
            </div>
        )
    }
}