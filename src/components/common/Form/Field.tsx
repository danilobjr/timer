import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

interface FieldProps extends HTMLProps<HTMLDivElement> {
  label: string;
  showValue?: boolean;
  value?: string;
  onClickValue?: () => void;
}

// TODO: should value color be blue?
// TODO: should it use a value to click on and show the text box? Why not just text box?
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
);

Field.defaultProps = {
  showValue: true,
  value: '',
  onClickValue: () => null,
};
