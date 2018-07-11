import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { FlexItem, FlexItemProps } from 'components/common';

interface PageContentProps extends FlexItemProps { }

export const PageContent: SFC<PageContentProps> = ({ children, className, ...otherProps }) => (
  <FlexItem {...otherProps} className={classNames('page-content', className, 'h-overflowauto')}>
    {children}
  </FlexItem>
)
