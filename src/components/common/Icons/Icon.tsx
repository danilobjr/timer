import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC, SVGAttributes } from 'react';
import { Svg } from './Svg';
import { iconStyles } from './styles';

export interface IconProps extends HTMLProps<HTMLElement> {
  name: string;
  height: number;
  width: number;
}

export const Icon: SFC<IconProps> = (props) => (
  <Svg
    className={classNames('icon', { [props.name]: props.name, [props.className]: props.className })}
    width={props.width}
    height={props.height}
    style={iconStyles.base}
  >
    {props.children}
  </Svg>
);
