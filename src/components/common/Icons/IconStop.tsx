import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

const styles = {
  ...iconStyles.base,
  strokeWidth: 1.5,
  fill: 'none',
};

type IconStopProps = Partial<IconProps>;

export const IconStop: SFC<IconStopProps> = (props) => (
  <Icon name="icon-stop" width={16} height={16} {...props}>
    <rect x="0.5" y="0.5" width="15" height="15" style={styles} />
  </Icon>
);
