import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';

export class NavigationBarItem extends BaseComponent {
    render() {
        return (
            <li 
                className={this.renderLiClassNames()} 
                onClick={this.handleOnClick.bind(this)}>
                <a className="link" href={`#${this.props.href}`}>
                    <span className={this.renderIconClassNames()}></span>
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
    
    renderIconClassNames() {
        return this.classNames(
            'icon',
            this.props.iconClassName
        );
    }
    
    handleOnClick() {
        const { text, onItemClick } = this.props;
        onItemClick(text);
    }
}

NavigationBarItem.propTypes = {
    isActive: PropTypes.bool,
    iconClassName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onItemClick: PropTypes.func
};