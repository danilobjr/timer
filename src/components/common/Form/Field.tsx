import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

const onClickValue = (props: FieldProps) => props.onClickValue()

interface FieldProps extends HTMLProps<HTMLDivElement> {
  label: string;
  showValue?: boolean;
  value?: string;
  onClickValue?: () => void;
}

export const Field: SFC<FieldProps> = (props) => (
  <div className={classNames('field', props.className)}>
    <label>{props.label}</label>
    <a
      className={classNames('value', { 'h-display-none': !props.showValue })}
      onClick={props.onClickValue}
    >
      {props.value || 'Click to type'}
    </a>
    {props.children}
  </div>
)

Field.defaultProps = {
  showValue: true,
  value: '',
  onClickValue: () => null,
};
