import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

const styles = {
  ...iconStyles.timerCommandButton.base,
  ...iconStyles.crispEdges,
};

type IconArrowLeftProps = IconProps;

export const IconArrowLeft: SFC<IconArrowLeftProps> = (props) => (
  <Icon name="icon-arrow-left" width={18} height={18} {...props}>
    <polyline points="9,0.5 0.7,9 9,17.5" fill="none" style={styles} />
    <line x1="0.5" y1="9" x2="18" y2="9" style={styles} />
  </Icon>
);
