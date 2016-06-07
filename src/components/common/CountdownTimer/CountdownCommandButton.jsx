import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const CountdownCommandButton = (props) =>
    <button 
        className={renderCommonButtonCssClasses(props)}
        onClick={props.onClick} 
    >
        <span className={classNames('icon', props.icon)}></span>
    </button>

const renderCommonButtonCssClasses = (props) => {
    return classNames(
        'countdown-command-button',
        props.className,
        '-reactive',
        { '-lightTheme': props.lightTheme },
        { 'h-hidden': !props.showButton }
    );
}

CountdownCommandButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    lightThene: PropTypes.bool
};

CountdownCommandButton.defaultProps = {
    showButton: true
};