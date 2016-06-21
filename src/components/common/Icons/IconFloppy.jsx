import React, { Component } from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign(
    {},
    iconStyles.base,
    iconStyles.timerCommandButton.base,
    {
        fill: 'none'
    }
);

export const IconFloppy = () => 
    <Icon name="icon-floppy" width={18} height={18}>
        <g style={styles}>
            <rect x="0.5" y="0.5" width="17" height="17" rx="2" ry="2" />
            <g style={{strokeWidth: 1}}>
                <polyline points="3,0.5 3,8 15,8 15,0.5" />
                <polyline points="4.5,17.5 4.5,12 12,12 12,17.5" />
                <line x1="7.5" y1="17.5" x2="7.5" y2="14" />
            </g>
        </g>
    </Icon>