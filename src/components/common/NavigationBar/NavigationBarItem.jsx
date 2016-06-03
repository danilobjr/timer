import React, { Component, PropTypes } from 'react';

export class NavigationBarItem extends Component {
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
        return [
            'navigation-bar-item',
            this.props.isActive && '-active'
        ].join(' ');
    }
    
    renderIconClassNames() {
        return [
            'icon',
            this.props.iconClassName
        ].join(' ');
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