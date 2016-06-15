import React, { PropTypes } from 'react';
import classNames from 'classnames';

const animationTypes = {
    slideUp: '-slide-up'
};

export const Animation = (props) => 
    <div className={classNames('animation', { [animationTypes[props.type]]: props.type })}>{props.children}</div>

Animation.propTypes = {
    type: PropTypes.string
};