import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';

type IconTrashProps = IconProps;

export const IconTrash: SFC<IconTrashProps> = (props) => (
  <Icon name="icon-trash" width={17} height={20} {...props}>
    <g fill="none" >
      <rect x="5.2" y="0.65" rx="1.3" ry="1.3" width="6.6" height="2.6" />
      <line x1="0" y1="3.25" x2="17" y2="3.25" />
      <rect x="1.95" y="3.25" rx="1.3" ry="1.3" width="13.1" height="16.15" />
      <line x1="5.2" y1="6.5" x2="5.2" y2="16.25" />
      <line x1="8.5" y1="6.5" x2="8.5" y2="16.25" />
      <line x1="11.8" y1="6.5" x2="11.8" y2="16.25" />
    </g>
  </Icon>
);
