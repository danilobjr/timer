import * as React from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign({}, 
    iconStyles.timerCommandButton.base
);

export const IconPlay = (props) => 
    <Icon {...props} name="play" width={14} height={18}>
        <polygon points="1,1 13,9 1,17" />
    </Icon>