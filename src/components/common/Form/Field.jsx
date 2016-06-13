import React, { PropTypes } from 'react';
import classNames from 'classnames';

const onClickValue = (props) => props.onClickValue()

export const Field = (props) => 
    <div className={classNames('field', props.className)}>
        <label>{props.label}</label>
        <a 
            className={classNames('value', { 'h-display-none': !props.showValue })} 
            onClick={props.onClickValue}
        >
            {props.value || 'Click to type'}
        </a>
        {props.children}
    </div>

Field.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    showValue: PropTypes.bool,
    onClickValue: PropTypes.func
};

Field.defaultProps = {
    showValue: true
};