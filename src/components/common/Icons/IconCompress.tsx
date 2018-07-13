import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

type IconCompressProps = IconProps;

export const IconCompress: SFC<IconCompressProps> = (props) => (
  <Icon name="icon-compress" width={18} height={18} {...props}>
    <g style={iconStyles.timerCommandButton.base}>
      <line x1="0" y1="18" x2="8" y2="10" />
      <line x1="10" y1="8" x2="18" y2="0" />
      <g fill="none">
        <polyline points="1.5,10.5 7.5,10.5 7.5,16.5" />
        <polyline points="10.5,1.5 10.5,7.5 16.5,7.5" />
      </g>
    </g>
  </Icon>
);
