import React, { Component, PropTypes } from 'react';
import { FlexBox } from 'components/common';

export const PageView = (props) => 
    <FlexBox className={`page-view ${props.className}`} column={!props.row} >
        {props.children}
    </FlexBox>

PageView.propTypes = {
    row: PropTypes.bool
};

PageView.defaultProps = {
    row: false
};