import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

type IconMinusProps = IconProps;

export const IconMinus: SFC<IconMinusProps> = (props) => (
  <Icon name="icon-minus" width={10} height={10} {...props}>
    <line x1="0" y1="5" x2="10" y2="5" style={iconStyles.crispEdges} />
  </Icon>
);
