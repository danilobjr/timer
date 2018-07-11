import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

interface IconAngleUpProps extends Partial<IconProps> {}

export const IconAngleUp: SFC<IconAngleUpProps> = (props) => (
  <Icon {...props} name="icon-angle-up" width={9} height={4.5}>
    <polyline points="0.5,4 4.5,0.5 8.5,4" fill="none" />
  </Icon>
)
