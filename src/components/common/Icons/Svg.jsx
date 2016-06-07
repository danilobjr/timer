import React, { Component } from 'react';

export const Svg = (props) =>
    <svg {...props} version="1.1"
            xmlns="http://www.w3.org/2000/svg">
        {props.children}
    </svg>