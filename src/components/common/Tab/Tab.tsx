import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

interface TabProps extends HTMLProps<HTMLDivElement> { }

export const Tab: SFC<TabProps> = ({ children, className }) => (
  <div className={classNames('tab', className)}>{children}</div>
)
