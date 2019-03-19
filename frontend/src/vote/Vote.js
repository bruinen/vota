import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';

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
                    <Button label="PD" icon="pi pi-plus" onClick={this.save} className="p-button-secondary" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Lega" icon="pi pi-plus" onClick={this.save} className="p-button-success" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Forza Italia" icon="pi pi-plus" onClick={this.save} className="p-button-info" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Movimento 5 Stelle" icon="pi pi-plus" onClick={this.save} className="p-button-warning" style={{ marginRight: '.25em' }}></Button>
                    <Button label="Casapound" icon="pi pi-plus" onClick={this.save} className="p-button-danger"></Button>
                </div>
            </div>
        )
    }
}