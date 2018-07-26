import * as React from 'react';
import { Field } from './Field';
import { ChangeEvent, Component } from 'react';

type FieldTextProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

// TODO: convert this to a SFC
export class FieldText extends Component<FieldTextProps> {
  static defaultProps: Partial<FieldTextProps> = {
    value: '',
    onChange: () => null,
  };

  render() {
    const { label, value } = this.props;

    return (
      <Field
        className="-text"
        label={label}
        value={value}
      >
        <input
          type="text"
          value={value}
          placeholder="Timer"
          ref="input"
          onChange={this.onChange}
        />
      </Field>
    );
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => this.props.onChange(e.currentTarget.value);
}
