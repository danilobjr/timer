import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { IconArrowLeft, IconMinus, IconRemove, IconSquare } from 'components/common';

const Icons = {
    arrowLeft: IconArrowLeft,
    minus: IconMinus,
    remove: IconRemove,
    square: IconSquare
};

const renderCssClasses = (props) =>
    classNames(
        'title-bar-button',
        props.className,
        { 
            '-red': props.red,
            '-lighttheme': props.lightTheme
        }        
    )

export const TitleBarButton = (props) => {
    const icon = props.icon ? React.createElement(Icons[props.icon]) : null;
    const lightTheme = props.lightTheme ? '-lighttheme' : '';

    return <button className={renderCssClasses(props)} onClick={props.onClick}>{icon}</button>;
}

TitleBarButton.propTypes = {
    icon: PropTypes.oneOf(Object.keys(Icons)).isRequired,
    red: PropTypes.bool,
    lightTheme: PropTypes.bool,
    onClick: PropTypes.func
};