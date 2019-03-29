import React from 'react';
import { Button } from 'primereact/button';
import classNames from 'classnames';

export class Party extends Button {

    renderIcon() {
        if (this.props.icon) {
            let className = classNames(this.props.icon, 'p-c', {
                'p-button-icon-left': this.props.iconPos !== 'right',
                'p-button-icon-right': this.props.iconPos === 'right'
            });

            return (
                <span className={className}>
                    {this.props.icondata && <img alt='Party symbol' src={this.props.icondata} style={{ 'width': '70px', 'height': '70px' }} />}</span>
            );
        }
        else {
            return null;
        }
    }

    renderLabel() {
        const buttonLabel = this.props.label.split('|')[0] || 'p-btn';
        var buttonSublabel = '';
        if (this.props.label.split('|')[1] !== 'undefined')
            buttonSublabel = this.props.label.split('|')[1];

        return (
            <span className="p-button-text p-c">{buttonLabel}
                <span className="p-button-subtext p-c">{buttonSublabel}</span>
            </span>
        );
    }

    render() {
        let className = classNames('p-button p-component', this.props.className, {
            'p-button-icon-only': this.props.icon && !this.props.label,
            'p-button-text-icon-left': this.props.icon && this.props.label && this.props.iconPos === 'left',
            'p-button-text-icon-right': this.props.icon && this.props.label && this.props.iconPos === 'right',
            'p-button-text-only': !this.props.icon && this.props.label,
            'p-disabled': this.props.disabled
        });
        let icon = this.renderIcon();
        let label = this.renderLabel();

        let buttonProps = Object.assign({}, this.props);
        delete buttonProps.iconPos;
        delete buttonProps.icon;
        delete buttonProps.icondata;
        delete buttonProps.label;
        delete buttonProps.tooltip;
        delete buttonProps.tooltipOptions;

        return (
            <button ref={(el) => this.element = el} {...buttonProps} className={className}>
                {this.props.iconPos === 'left' && icon}
                {label}
                {this.props.iconPos === 'right' && icon}
                {this.props.children}
            </button>
        );
    }
}
