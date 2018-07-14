import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';
import { rearrangeNumbersToDisplayThemInScroller, generateRangeOfNumbers } from './localUtils';
import { compose, splitAt, map } from 'utils';

interface NumberSelectorProps {
  label: string;
  offset?: number;
  rangeSize: number;
  startsWith?: number;
  value: number;
  onChange: (number: number) => void;
}

// TODO: check if it needs to re-render in shouldComponentUpdate

export class NumberSelector extends Component<NumberSelectorProps> {
  static defaultProps: Partial<NumberSelectorProps> = {
    offset: 5,
    startsWith: 0,
  };

  render() {
    return (
      <div className="number-selector">
        <div className="slider">
          <div className="scroller">
            <ul className="numbers">
              {this.renderListItems()}
            </ul>
          </div>
          <button className="btn -up" onClick={this.handleClickPrevious}><IconAngleUp /></button>
          <button className="btn -down" onClick={this.handleClickNext}><IconAngleDown /></button>
        </div>
        <span className="label">{this.props.label}</span>
      </div>
    );
  }

  // tslint:disable-next-line:typedef
  mapNumberToListItem = map((number: string) => (
    <li
      key={number}
      className={classNames('number', { 'selected': Number(number) === this.props.value })}
      onClick={this.handleClick(number)}
    >
      {number}
    </li>
  ));

  renderListItems = () => {
    const { offset, rangeSize, startsWith, value } = this.props;

    return compose(
      this.mapNumberToListItem,
      rearrangeNumbersToDisplayThemInScroller,
      splitAt(value - offset),
      generateRangeOfNumbers(startsWith),
    )(rangeSize);
  }

  handleClickPrevious = () => {
    const { rangeSize, value, onChange } = this.props;
    const lastNumberOnList = rangeSize;

    const changedValue = value === 0
      ? lastNumberOnList
      : value - 1;

    onChange(changedValue);
  }

  handleClickNext = () => {
    const { rangeSize, value, onChange } = this.props;
    const lastNumberOnList = rangeSize;

    const changedValue = value === lastNumberOnList
      ? 0
      : value + 1;

    onChange(changedValue);
  }

  handleClick = (number: string) => () => this.props.onChange(Number(number));
}
