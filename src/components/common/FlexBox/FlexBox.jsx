import React, { Component, PropTypes } from 'react';

const renderClassNames = (props) => {
    return [
        props.className,
        'flex-box',
        props.column && '-column',
        `-${props.justify}`
    ].join(' ');
}

export const FlexBox = (props) => <div className={renderClassNames(props)}>{props.children}</div>

FlexBox.propTypes = {
    column: PropTypes.bool,
    justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-around', 'space-between'])
};

FlexBox.defaultProps = {
    justify: 'flex-start'
};