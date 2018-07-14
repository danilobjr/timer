import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';
import {
  compose, splitAt, reverse, map, flatten,
  padLeft, replace, inc
} from 'utils';
import { createArrayOfNumbers, formatNumbers, rearrangeNumbers } from './localUtils';

interface NumberSelectorProps {
  label?: string;
  selected?: number;
  lastNumber: number;
  onSelectNext: () => void;
  onSelectPrevious: () => void;
  onSelectExactly: (number: number) => void;
}

export class NumberSelector extends Component<NumberSelectorProps> {
  private static listOfNumbersStartsWith: number = 0;
  private static offset: number = 5;

  static defaultProps = {
    label: 'numbers',
    selected: 0
  };

  private numbers: number[];

  constructor(props: NumberSelectorProps) {
    super(props);

    const { selected, lastNumber } = this.props;

    this.numbers = compose(
      formatNumbers,
      createArrayOfNumbers(NumberSelector.listOfNumbersStartsWith)
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
          <button className="btn -up" onClick={this.selectPrevious}><IconAngleUp /></button>
          <button className="btn -down" onClick={this.selectNext}><IconAngleDown /></button>
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

  renderListItems = (numbers: number[]) => {
    return map((n: number) => (
        <li
          key={n}
          className={classNames('number', { 'selected': Number(n) === this.props.selected })}
          onClick={this.selectExactly(n)}
        >
          {n}
        </li>
      ))(numbers);
  }

  selectNext = () => {
    this.props.onSelectNext();
  }

  selectPrevious = () => {
    this.props.onSelectPrevious();
  }

  selectExactly = (number: number) => () => {
    this.props.onSelectExactly(Number(number));
  }
}

