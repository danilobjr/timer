import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';
// import { FlexItem, FlexItemProps } from 'components/common';

// interface PageContentProps extends FlexItemProps { }

// export const PageContent: SFC<PageContentProps> = ({ children, className, ...otherProps }) => (
//   <FlexItem {...otherProps} className={classNames('page-content', className, 'h-overflowauto')}>
//     {children}
//   </FlexItem>
// )

interface PageContentProps extends HTMLProps<HTMLDivElement> { }

export const PageContent: SFC<PageContentProps> = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames('page-content', className)}>
    {children}
  </div>
);
