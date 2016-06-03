import React, { Component, PropTypes } from 'react';

const renderClassNames = (props) => {
    return [
        'flex-box',
        props.column && '-column'
    ].join(' ');
}

export const FlexBox = (props) => <div className={renderClassNames(props)}>{props.children}</div>

FlexBox.propTypes = {
    column: PropTypes.bool
};