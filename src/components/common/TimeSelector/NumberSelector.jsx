import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { IconAngleUp, IconAngleDown } from 'components/common';
import { 
    compose, range, splitAt, reverse, map, flatten,
    padLeft, replace, inc
} from 'helpers';
import { createArrayOfNumbersOf, formatNumbers, rearrangeNumbers } from './localHelpers';

export class NumberSelector extends BaseComponent {
    constructor(props) {
        super(props);
    
        const { selected, lastNumber } = this.props;

        this.numbers = compose(
            formatNumbers, 
            createArrayOfNumbersOf(NumberSelector.listOfNumbersStartsWith)
        )(lastNumber);
    }

    render() {
        return (
            <div className="number-selector">
                <div className="slider">
                    <div className="scroller">
                        <ul className="numbers">
                            {this.renderNumbers()}
                        </ul>
                    </div>
                    <button className="btn -up" onClick={this.selectPrevious.bind(this)}><IconAngleUp /></button>
                    <button className="btn -down" onClick={this.selectNext.bind(this)}><IconAngleDown /></button>
                </div>
                <span className="label">{this.props.label}</span>
            </div>
        );
    }

    renderNumbers() {
        return compose(
            this.renderListItems.bind(this),
            rearrangeNumbers, 
            splitAt(this.props.selected - NumberSelector.offset)
        )(this.numbers);
    }

    renderListItems(numbers) {
        return map(function(n) { 
            return <li 
                key={n} 
                className={this.classNames('number', { 'selected': Number(n) === this.props.selected })} 
                onClick={() => this.selectExactly(n)}
            >
                {n}
            </li>;
        }.bind(this))(numbers);
    }

    selectNext() {
        this.props.onSelectNext();
    }

    selectPrevious() {
        this.props.onSelectPrevious();
    }

    selectExactly(number) {
        this.props.onSelectExactly(Number(number));
    }
}

NumberSelector.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.number,
    lastNumber: PropTypes.number.isRequired,
    onSelectNext: PropTypes.func.isRequired,
    onSelectPrevious: PropTypes.func.isRequired,
    onSelectExactly: PropTypes.func.isRequired
};

NumberSelector.defaultProps = {
    label: 'numbers',
    selected: 0
};

NumberSelector.listOfNumbersStartsWith = 0;
NumberSelector.offset = 5;