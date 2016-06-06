import React, { Component } from 'react';
import { FlexItem } from 'components/common';

export const PageContent = (props) => 
    <FlexItem {...props} className={`${props.className} h-overflowauto`}>
        {props.children}
    </FlexItem>