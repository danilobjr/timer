import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconSquareProps = IconProps;

export const IconSquare: SFC<IconSquareProps> = (props) => (
  <Icon name="icon-square" width={10} height={10} {...props}>
    <rect x="0.5" y="0.5" width="9" height="9" fill="none" />
  </Icon>
);
