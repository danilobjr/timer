import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { FlexBox } from 'components/common';

export const PageView = (props) => 
    <FlexBox className={classNames('page-view', props.className)} column={!props.row} >
        {props.children}
    </FlexBox>

PageView.propTypes = {
    row: PropTypes.bool
};

PageView.defaultProps = {
    row: false
};