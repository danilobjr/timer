import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';

const renderClassNames = (props: FlexBoxProps) => {
  return classNames(
    props.className,
    'flex-box',
    props.column && '-column',
    props.wrap && '-wrap',
    `-justify-content-${props.justify}`,
    `-align-items-${props.alignItems}`
  );
}

interface ChangedProps extends HTMLProps<HTMLDivElement> {
  wrap?: any;
}

export interface FlexBoxProps extends ChangedProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  column?: boolean;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  wrap?: boolean;
}

// TODO: remove this
export const FlexBox: SFC<FlexBoxProps> = (props) => <div className={renderClassNames(props)}>{props.children}</div>

FlexBox.defaultProps = {
  alignItems: 'flex-start',
  column: false,
  justify: 'flex-start',
  wrap: false,
};
