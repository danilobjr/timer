import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

const styles = {
  strokeWidth: 1.3
};

interface IconFlagProps extends IconProps { }

export const IconFlag: SFC<IconProps> = (props) => (
  <Icon {...props} name="icon-flag" width={17} height={20}>
    <g fill="none" style={styles}>
      <line x1="0.65" y1="0" x2="0.65" y2="20"></line>
      <rect x="0.65" y="0.65" width="8.45" height="9"></rect>
      <rect x="9.1" y="3.25" width="7.25" height="9"></rect>
    </g>
  </Icon>
)
