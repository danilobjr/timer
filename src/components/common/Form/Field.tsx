import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

interface FieldProps extends HTMLProps<HTMLDivElement> {
  label: string;
  value?: string;
  onClickValue?: () => void;
}

export const Field: SFC<FieldProps> = (props) => (
  <div className={classNames('field', props.className)}>
    <label>{props.label}</label>
    {props.children}
  </div>
);

Field.defaultProps = {
  value: '',
  onClickValue: () => null,
};
