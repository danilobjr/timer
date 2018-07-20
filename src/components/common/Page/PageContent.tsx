import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';

type PageContentProps = HTMLProps<HTMLDivElement>;

export const PageContent: SFC<PageContentProps> = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames('page-content', className)}>
    {children}
  </div>
);
