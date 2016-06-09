import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Svg } from './Svg';
import { iconStyles } from './styles';

export const Icon = (props) => 
    <Svg 
        className={classNames('icon', { [props.name]: props.name })} 
        width={props.width} 
        height={props.height}
        style={iconStyles.base}
    >
            {props.children}
    </Svg>

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};