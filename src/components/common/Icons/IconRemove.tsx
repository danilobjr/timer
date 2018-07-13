import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconRemoveProps = IconProps;

export const IconRemove: SFC<IconRemoveProps> = (props) => (
  <Icon name="icon-remove" width={10} height={10} {...props}>
    <line x1="0" y1="0" x2="10" y2="10" />
    <line x1="10" y1="0" x2="0" y2="10" />
  </Icon>
);
