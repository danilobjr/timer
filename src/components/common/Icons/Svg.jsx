import React, { PropTypes } from 'react';

export const Svg = (props) =>
    <svg width={props.width} height={props.height} 
        viewBox={`0 0 ${props.width} ${props.height}`} 
        version="1.1" xmlns="http://www.w3.org/2000/svg"
    >
        {props.children}
    </svg>

Svg.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};