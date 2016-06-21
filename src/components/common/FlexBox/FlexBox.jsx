import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const renderClassNames = (props) => {
    return classNames(
        props.className,
        'flex-box',
        props.column && '-column',
        props.wrap && '-wrap',
        `-justify-content-${props.justify}`,
        `-align-items-${props.alignItems}`
    );
}

export const FlexBox = (props) => <div className={renderClassNames(props)}>{props.children}</div>

FlexBox.propTypes = {
    column: PropTypes.bool,
    wrap: PropTypes.bool,
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-around', 'space-between'])
};

FlexBox.defaultProps = {
    alignItems: 'stretch',
    justify: 'flex-start'
};