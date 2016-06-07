import React, { PropTypes } from 'react';
import classNames from 'classnames';

const renderClassNames = (props) => {
    return classNames(
        props.className,
        'flex-item',
        props.grow && `-grow${props.grow}`
    );
}

export const FlexItem = (props) => <div className={renderClassNames(props)}>{props.children}</div>;

FlexItem.propTypes = {
    grow: PropTypes.number
};