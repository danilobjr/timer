import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { IconMinus, IconSquare, IconRemove } from 'components/common';

const Icons = {
    minus: IconMinus,
    square: IconSquare,
    remove: IconRemove
};

export const TitleBarButton = (props) => {
    const icon = props.icon ? React.createElement(Icons[props.icon]) : null;
    const lightTheme = props.lightTheme ? '-lighttheme' : '';

    return (
        <button className={`title-bar-button ${props.className} ${props.red ? '-red' : ''} ${lightTheme}`}>
            {icon}
        </button>
    );
}

TitleBarButton.propTypes = {
    icon: PropTypes.oneOf(Object.keys(Icons)).isRequired,
    red: PropTypes.bool,
    lightTheme: PropTypes.bool
};