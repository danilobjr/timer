import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign({},
  iconStyles.timerCommandButton.base
);

interface IconPlayProps extends Partial<IconProps> { }

export const IconPlay: SFC<IconPlayProps> = (props) => (
  <Icon {...props} name="icon-play" width={14} height={18}>
    <polygon points="1,1 13,9 1,17" />
  </Icon>
)
