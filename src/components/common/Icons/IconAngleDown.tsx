import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconAngleDownProps = IconProps;

export const IconAngleDown: SFC<IconAngleDownProps> = (props) => (
  <Icon name="icon-angle-down" width={9} height={4.5} {...props}>
    <polyline points="0.5,0.5 4.5,4 8.5,0.5" fill="none" />
  </Icon>
);
