import * as React from 'react';
import * as classNames from 'classnames';
import { Field } from './Field';
import { ChangeEvent, Component } from 'react';

const initialState = { inputIsVisible: false };

type FieldTextProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
};

type FieldTextState = Readonly<typeof initialState>;

export class FieldText extends Component<FieldTextProps, FieldTextState> {
  static defaultProps: Partial<FieldTextProps> = {
    value: '',
    onChange: () => null,
  };

  readonly state: FieldTextState = initialState;

  componentDidUpdate() {
    (this.refs.input as any).focus();
  }

  render() {
    const { inputIsVisible } = this.state;
    const { label, value } = this.props;

    return (
      <Field
        className="-text"
        label={label}
        value={value}
        showValue={!inputIsVisible}
        onClickValue={this.showInput}
      >
        <input
          className={classNames({ 'h-display-none': !inputIsVisible })}
          type="text"
          value={value}
          placeholder="Input"
          ref="input"
          onBlur={this.hideInput}
          onChange={this.onChange}
        />
      </Field>
    );
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => this.props.onChange(e.currentTarget.value);
  showInput = () => this.setState({ inputIsVisible: true });
  hideInput = () => this.setState({ inputIsVisible: false });
}
