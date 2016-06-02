import React, { Component, PropTypes } from 'react';

export class NavigationBarItem extends Component {
    render() {
        return (
            <li {...this.props} onClick={this.props.onClick}>
                <a href={`#${this.props.href}`}>
                    <span className={this.renderIconClassNames()}></span>
                    <span className="text">{this.props.text}</span>
                </a>
            </li>
        );
    }
    
    renderIconClassNames() {
        return `icon ${this.props.iconClassName}`.trim();
    }
}

NavigationBarItem.propTypes = {
    iconClassName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};