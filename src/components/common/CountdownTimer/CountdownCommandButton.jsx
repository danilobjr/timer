import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { IconCompress, IconExpand, IconReset, IconTrash } from './../Icons';

const Icons = {
    compress: IconCompress,
    expand: IconExpand,
    reset: IconReset,
    trash: IconTrash
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
        { 
            '-lightTheme': props.lightTheme, 
            'h-display-none': !props.showButton,
            'h-pull-left': props.position === 'left',
            'h-pull-right': props.position === 'right'
        }
    );
}

CountdownCommandButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    lightThene: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right'])
};

CountdownCommandButton.defaultProps = {
    showButton: true,
    lightTheme: false,
    position: 'left'
};