import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { Field } from './Field';

export class FieldText extends BaseComponent {
    constructor(props) {
        super(props);
    
        this.input = null;

        this.state = {
            inputIsVisible: false
        };
    }

    componentDidUpdate() {
        this.refs.input.focus();
    }

    render() {
        const { inputIsVisible } = this.state;
        const { label, value, defaultValue, onChange } = this.props;

        return (
            <Field 
                className="-text" 
                label={label} 
                value={value}
                showValue={!inputIsVisible} 
                onClickValue={this.showInput.bind(this)}
            >
                <input 
                    className={this.classNames({ 'h-display-none': !inputIsVisible })} 
                    type="text"
                    defaultValue={defaultValue}
                    placeholder="Input"
                    ref="input"
                    onBlur={this.hideInput.bind(this)}
                    onChange={(e) => onChange(e.currentTarget.value)}
                />
            </Field>
        );
    }

    showInput() {
        this.setState({ inputIsVisible: true });
    }

    hideInput() {
        this.setState({ inputIsVisible: false });
    }
}

FieldText.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
};