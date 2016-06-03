import React, { Component, PropTypes } from 'react';

export const CommandBarItem = (props) => 
    <li className="command-bar-item">
        <span className={`icon ${props.icon}`}></span>
    </li>

CommandBarItem.propTypes = {
    icon: PropTypes.string.isRequired
};