import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const renderClassNames = (props) => {
    return classNames(
        props.className,
        'flex-box',
        props.column && '-column',
        props.wrap && '-wrap',
        `-${props.justify}`
    );
}

export const FlexBox = (props) => <div className={renderClassNames(props)}>{props.children}</div>

FlexBox.propTypes = {
    column: PropTypes.bool,
    wrap: PropTypes.bool,
    justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-around', 'space-between'])
};

FlexBox.defaultProps = {
    justify: 'flex-start'
};