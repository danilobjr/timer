import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { IconStopwatch, IconTimer } from 'components/common';

const icons = {
    stopwatch: IconStopwatch,
    timer: IconTimer
};

export class NavigationTabItem extends BaseComponent {
    render() {
        return (
            <li 
                className={this.renderLiClassNames()} 
                onClick={this.props.onItemClick}
            >
                {React.createElement(icons[this.props.icon])}
                <span className="text">{this.props.text}</span>
            </li>
        );
    }
    
    renderLiClassNames() {
        return this.classNames(
            'navigation-tab-item',
            this.props.isActive && '-active'
        );
    }
}

NavigationTabItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func
};