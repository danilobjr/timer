import * as React from 'react';
import { SFC, SVGAttributes } from 'react';

type SvgProps = {
  height: number;
  width: number;
} & SVGAttributes<{}>;

export const Svg: SFC<SvgProps> = ({ children, height, width, ...otherProps }) => (
  <svg
    {...otherProps}
    width={width} height={height}
    viewBox={`0 0 ${width} ${height}`}
    version="1.1" xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);
