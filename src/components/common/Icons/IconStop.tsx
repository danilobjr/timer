import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconStopProps = Partial<IconProps>;

export const IconStop: SFC<IconStopProps> = (props) => (
  <Icon name="icon-play" width={18} height={18} {...props}>
    <rect x="0.5" y="0.5" width="17" height="17" rx="2" ry="2" />
  </Icon>
);
