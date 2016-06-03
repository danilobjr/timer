import React, { Component, PropTypes } from 'react';

export class NavigationBarItem extends Component {
    render() {
        return (
            <li 
                {...this.props} 
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
        const result = ['navigation-bar-item'];
        const { className, isActive } = this.props;
        
        className && result.push(className);
        isActive && result.push('-active');
        
        return result.join(' ');
    }
    
    renderIconClassNames() {
        return `icon ${this.props.iconClassName}`.trim();
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