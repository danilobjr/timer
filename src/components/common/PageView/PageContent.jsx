import React from 'react';
import classNames from 'classnames';
import { FlexItem } from 'components/common';

export const PageContent = (props) => 
    <FlexItem {...props} className={classNames(props.className, 'h-overflowauto')}>
        {props.children}
    </FlexItem>