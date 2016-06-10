import * as React from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign({},
    { crispEdges: iconStyles.crispEdges },
    { strokeWidth: 2 }
);

export const IconPlus = () => 
    <Icon name="plus" width={20} height={20}>
        <g style={styles}>
            <line x1="10" y1="0" x2="10" y2="20" />
            <line x1="0" y1="10" x2="20" y2="10" />
        </g>
    </Icon>