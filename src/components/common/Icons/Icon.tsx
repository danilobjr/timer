import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { Svg } from './Svg';
import { iconStyles } from './styles';

export type IconProps = {
  name: string;
  height: number;
  width: number;
} & HTMLProps<HTMLElement>;

export const Icon: SFC<IconProps> = (props) => (
  <Svg
    className={classNames(
      'icon',
      {
        [props.name]: props.name,
        [props.className]: props.className,
      },
    )}
    width={props.width}
    height={props.height}
    style={iconStyles.base}
  >
    {props.children}
  </Svg>
);
