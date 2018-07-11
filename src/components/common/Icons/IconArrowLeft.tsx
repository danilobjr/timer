import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

interface IconArrowLeftProps extends IconProps { }

export const IconArrowLeft: SFC<IconArrowLeftProps> = (props) => (
  <Icon {...props} name="icon-arrow-left" width={12} height={11}>
    <polyline points="5,0.5 0.5,5 5,10" fill="none" />
    <line x1="0" y1="5" x2="12" y2="5" style={iconStyles.crispEdges} />
  </Icon>
)
