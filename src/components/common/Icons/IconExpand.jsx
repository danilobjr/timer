import * as React from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

export const IconExpand = () => 
    <Icon name="expand" width={18} height={18}>
        <g style={iconStyles.timerCommandButton.base}>
            <line x1="0" y1="18" x2="18" y2="0" />
            <line x1="0.6" y1="11" x2="0.6" y2="18"  />
            <line x1="0" y1="17.4" x2="7" y2="17.4"  />
            <line x1="17.4" y1="0" x2="17.4" y2="7"  />
            <line x1="11" y1="0.6" x2="18" y2="0.6"  />
        </g>
    </Icon>