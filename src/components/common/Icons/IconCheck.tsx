import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

const styles = {
  fill: 'none',
  strokeWidth: 1.2,
  transformOrigin: '100% 100%',
  transform: 'rotateZ(45deg) translate(2px, 7px)',
};

type IconCheckProps = IconProps;

export const IconCheck: SFC<IconCheckProps> = (props) => (
  <Icon name="icon-check" width={20} height={16} {...props}>
    <polyline points="0,18 8,18 8,0" style={styles} />
  </Icon>
);
