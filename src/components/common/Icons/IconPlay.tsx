import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconPlayProps = Partial<IconProps>;

export const IconPlay: SFC<IconPlayProps> = (props) => (
  <Icon name="icon-play" width={14} height={18} {...props}>
    <polygon points="1,1 13,9 1,17" />
  </Icon>
);
