import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

const renderClassNames = (props: FlexItemProps) => {
  return classNames(
    props.className,
    'flex-item',
    props.grow && `-grow${props.grow}`
  );
}

export interface FlexItemProps extends HTMLProps<HTMLDivElement> {
  grow?: number;
}

// TODO: remove this
export const FlexItem: SFC<FlexItemProps> = (props) => <div className={renderClassNames(props)}>{props.children}</div>;

FlexItem.defaultProps = {
  grow: 1,
};
