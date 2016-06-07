import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { IconMinus, IconSquare, IconRemove } from 'components/common';

const Icons = {
    minus: IconMinus,
    square: IconSquare,
    remove: IconRemove
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

    return <button className={renderCssClasses(props)}>{icon}</button>;
}

TitleBarButton.propTypes = {
    icon: PropTypes.oneOf(Object.keys(Icons)).isRequired,
    red: PropTypes.bool,
    lightTheme: PropTypes.bool
};