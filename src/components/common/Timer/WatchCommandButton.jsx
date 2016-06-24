import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { IconCompress, IconExpand, IconFlag, 
    IconReset, IconTrash } from './../Icons';

const Icons = {
    compress: IconCompress,
    expand: IconExpand,
    flag: IconFlag,
    reset: IconReset,
    trash: IconTrash
};

export const WatchCommandButton = (props) => {
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
        'watch-command-button',
        props.className,
        '-reactive',
        { 
            '-lightTheme': props.lightTheme, 
            'h-display-none': props.hideButton,
            'h-pull-left': props.position === 'left',
            'h-pull-right': props.position === 'right'
        }
    );
}

WatchCommandButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    hideButton: PropTypes.bool,
    lightThene: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right'])
};

WatchCommandButton.defaultProps = {
    hideButton: false,
    lightTheme: false,
    position: 'left'
};