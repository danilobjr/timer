import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

type PageProps = HTMLProps<HTMLDivElement>;

export const Page: SFC<PageProps> = ({ children, className }) => (
  <div className={classNames('page', className)}>
    {children}
  </div>
);
