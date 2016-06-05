import React, { Component, PropTypes } from 'react';

const renderHref = (href) => href ? `#${href}` : '#' 

export const CommandBarItem = (props) =>
    <a {...props} className="command-bar-item" href={renderHref(props.href)}>
        <span className={`icon ${props.icon}`}></span>
    </a>

CommandBarItem.propTypes = {
    icon: PropTypes.string.isRequired
};