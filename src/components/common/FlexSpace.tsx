import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';

type FlexSpaceProps = HTMLProps<HTMLDivElement>;

export const FlexSpace: SFC<FlexSpaceProps> = ({ children, className, ...otherProps }) => (
  <div
    className={classNames('flex-space', className)}
    {...otherProps}
  >
    {children}
  </div>
);
