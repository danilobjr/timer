import React, { Component } from 'react';
import { Svg } from './Svg';

export const IconRemove = () => 
    <Svg width={10} height={10}>
        <line x1="0" y1="0" x2="10" y2="10" stroke="black" stroke-width="1" />
        <line x1="10" y1="0" x2="0" y2="10" stroke="black" stroke-width="1" />
    </Svg>