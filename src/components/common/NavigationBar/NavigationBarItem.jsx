import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { IconStopwatch, IconTimer } from 'components/common';

const icons = {
    stopwatch: IconStopwatch,
    timer: IconTimer
};

export class NavigationBarItem extends BaseComponent {
    render() {
        return (
            <li 
                className={this.renderLiClassNames()} 
                onClick={this.handleOnClick.bind(this)}>
                <a className="link" href={`#${this.props.href}`}>
                    {React.createElement(icons[this.props.icon])}
                    <span className="text">{this.props.text}</span>
                </a>
            </li>
        );
    }
    
    renderLiClassNames() {
        return this.classNames(
            'navigation-bar-item',
            this.props.isActive && '-active'
        );
    }
    
    rendericons() {
        return this.classNames(
            'icon',
            this.props.icon
        );
    }
    
    handleOnClick() {
        const { text, onItemClick } = this.props;
        onItemClick(text);
    }
}

NavigationBarItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func
};