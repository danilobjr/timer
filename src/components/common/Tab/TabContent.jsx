import React from 'react';
import { FlexItem } from 'components/common';

export const TabContent = (props) => <FlexItem className="tab-content" grow={1}>{props.children}</FlexItem>