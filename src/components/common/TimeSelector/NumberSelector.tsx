import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';
import { rearrangeNumbersToDisplayThemInScroller, generateRangeOfNumbers } from './localUtils';
import { compose, splitAt, map, log } from 'utils';

interface NumberSelectorProps {
  label?: string;
  offset?: number;
  rangeSize: number;
  startsWith?: number;
  value?: number;
  onSelectNext: () => void;
  onSelectPrevious: () => void;
  onSelectExactly: (number: number) => void;
}

// TODO: check if it needs to re-render in shouldComponentUpdate

export class NumberSelector extends Component<NumberSelectorProps> {
  static defaultProps: Partial<NumberSelectorProps> = {
    label: 'numbers',
    offset: 5,
    startsWith: 0,
    value: 0,
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
          <button className="btn -up" onClick={this.selectPrevious}><IconAngleUp /></button>
          <button className="btn -down" onClick={this.selectNext}><IconAngleDown /></button>
        </div>
        <span className="label">{this.props.label}</span>
      </div>
    );
  }

  // tslint:disable-next-line:typedef
  mapNumberToListItem = map((number: number) => (
    <li
      key={number}
      className={classNames('number', { 'selected': number === this.props.value })}
      onClick={this.selectExactly(number)}
    >
      {number}
    </li>
  ));

  renderListItems = () => {
    const {offset, rangeSize, startsWith, value} = this.props;

    return compose(
      this.mapNumberToListItem,
      rearrangeNumbersToDisplayThemInScroller,
      splitAt(value - offset),
      generateRangeOfNumbers(startsWith),
    )(rangeSize);
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
