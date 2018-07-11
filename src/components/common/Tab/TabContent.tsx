import * as React from 'react';
import { SFC } from 'react';
import { FlexItem } from 'components/common';

export const TabContent: SFC<{}> = ({ children }) => (
  <FlexItem className="tab-content" grow={1}>{children}</FlexItem>
)
