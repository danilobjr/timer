import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { IconCompress, IconExpand, IconReset } from './../Icons';

const Icons = {
    compress: IconCompress,
    expand: IconExpand,
    reset: IconReset,
};

export const CountdownCommandButton = (props) => {
    const icon = props.icon ? React.createElement(Icons[props.icon]) : null;

    return (
        <button 
            className={renderCommonButtonCssClasses(props)} 
            onClick={props.onClick} 
            title={props.title}
        >
            {icon}
        </button>
    );
}

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