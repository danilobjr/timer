import React, { PropTypes } from 'react';

const renderClassNames = (props) => {
    return [
        props.className,
        'flex-item',
        props.grow && `-grow${props.grow}`
    ].join(' ');
}

export const FlexItem = (props) => <div className={renderClassNames(props)}>{props.children}</div>;

FlexItem.propTypes = {
    grow: PropTypes.number
};