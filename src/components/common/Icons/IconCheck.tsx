import * as React from 'react';
import { SFC } from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

const styles = {
  fill: 'none',
  strokeWidth: 1.2,
  transformOrigin: '100% 100%',
  transform: 'rotateZ(45deg) translate(-3px, -1px)'
};

export const IconCheck: SFC<{}> = () => (
  <Icon name="icon-check" width={20} height={16}>
    <polyline points="0,18 8,18 8,0" style={styles} />
  </Icon>
)
