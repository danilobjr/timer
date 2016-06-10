import * as React from 'react';
import { Icon } from './Icon';

export const IconRemove = () => 
    <Icon name="remove" width={10} height={10}>
        <line x1="0" y1="0" x2="10" y2="10" />
        <line x1="10" y1="0" x2="0" y2="10" />
    </Icon>