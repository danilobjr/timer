import * as React from 'react';
import { Component } from 'react';
import { NumberSelector } from 'components/common';
import { inc, dec } from 'utils';
import { StringKeyValuePair } from 'models';
import { createArrayOfNumbersOf, select } from './localHelpers';

type TimeSelectorProps = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onChange?: (time: StringKeyValuePair) => void;
};

export class TimeSelector extends Component<TimeSelectorProps> {
  render() {
    const { hours, minutes, seconds } = this.props;

    return (
      <div className="time-selector">
        <NumberSelector
          label="hours"
          selected={hours}
          lastNumber={23}
          onSelectNext={this.updateDataByProperty('hours', 23, inc)}
          onSelectPrevious={this.updateDataByProperty('hours', 23, dec)}
          onSelectExactly={this.updateData('hours')}
        />
        <NumberSelector
          label="minutes"
          selected={minutes}
          lastNumber={59}
          onSelectNext={this.updateDataByProperty('minutes', 59, inc)}
          onSelectPrevious={this.updateDataByProperty('minutes', 59, dec)}
          onSelectExactly={this.updateData('minutes')}
        />
        <NumberSelector
          label="seconds"
          selected={seconds}
          lastNumber={59}
          onSelectNext={this.updateDataByProperty('seconds', 59, inc)}
          onSelectPrevious={this.updateDataByProperty('seconds', 59, dec)}
          onSelectExactly={this.updateData('seconds')}
        />
      </div>
    );
  }

  updateData = (property: string) => (number: number) => {
    const updatedData = {
      ...this.props,
      [property]: number,
    };

    this.props.onChange(updatedData);
  }

  updateDataByProperty = (property: string, lastNumber: number, operation: typeof inc) => () => {
    const selectedNumber = (this.props as StringKeyValuePair)[property];
    const update = { [property]: select(createArrayOfNumbersOf(0)(lastNumber), selectedNumber, operation) };

    const updatedData = {
      ...this.props,
      ...update,
    };

    this.props.onChange(updatedData);
  }
}
