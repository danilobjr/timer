import * as React from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

export const IconMinus = () => 
    <Icon name="icon-minus" width={10} height={10}>
        <line x1="0" y1="5" x2="10" y2="5" style={iconStyles.crispEdges} />
    </Icon>