import React from 'react';
import { Button } from 'primereact/button';
import { Candidates } from './Candidates';
import classNames from 'classnames';

export class Party extends Button {

    putX() {
        if (!this.selectedItem) 
            this.selectedItem = <img className='button-selected' alt='X' src='/x.png' />;
        else this.selectedItem = null;
        this.forceUpdate();
    }

    renderIcon() {
        if (this.props.icon) {
            let className = classNames(this.props.icon, 'p-c', {
                'p-button-icon-left': this.props.iconPos !== 'right',
                'p-button-icon-right': this.props.iconPos === 'right'
            });

            return (
                <span className={className}>
                    {this.props.icondata && <img alt='Party symbol' src={this.props.icondata} style={{ 'width': '90px', 'height': '90px' }} />}
                    {this.selectedItem}
                </span>
            );
        }
        else {
            return this.selectedItem;
        }
    }

    renderLabel() {
        if (this.props.label) {
            const buttonLabel = this.props.label.split('|')[0] || 'p-btn';
            var buttonSublabel = '';
            if (this.props.label.split('|')[1] !== 'undefined')
                buttonSublabel = this.props.label.split('|')[1];
            return (<span className="p-button-text p-c">{buttonLabel}
                <span className="p-button-subtext p-c">{buttonSublabel}</span>
            </span>
            );
        }
    }

    renderCandidates() {
        if (this.props.candidates)
            return (<Candidates config={this.props.candidates} maxcandidates={this.props.maxcandidates} />);
    }

    render() {
        let className = classNames('p-button p-component', this.props.className, {
            'p-button-icon-only': this.props.icon && !this.props.label && !this.props.candidates,
            'p-button-text-icon-left': this.props.icon && (this.props.label || this.props.candidates) && this.props.iconPos === 'left',
            'p-button-text-icon-right': this.props.icon && (this.props.label || this.props.candidates) && this.props.iconPos === 'right',
            'p-button-text-only': !this.props.icon && (this.props.label || this.props.candidates),
            'p-disabled': this.props.disabled
        });
        let icon = this.renderIcon();
        let label = this.renderLabel();
        let candidates = this.renderCandidates();

        let buttonProps = Object.assign({}, this.props);
        delete buttonProps.iconPos;
        delete buttonProps.icon;
        delete buttonProps.icondata;
        delete buttonProps.label;
        delete buttonProps.tooltip;
        delete buttonProps.tooltipOptions;

        return (
            <div ref={(el) => this.element = el} {...buttonProps} className={className}>
                {this.props.iconPos === 'left' && icon}
                {label}
                {candidates}
                {this.props.iconPos === 'right' && icon}
                {this.props.children}
            </div>
        );
    }
}
