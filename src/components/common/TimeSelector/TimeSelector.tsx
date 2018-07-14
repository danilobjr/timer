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
  private time: StringKeyValuePair;

  constructor(props: TimeSelectorProps) {
    super(props);

    this.time = {
      hours: props.hours,
      minutes: props.minutes,
      seconds: props.seconds,
    };
  }

  componentWillReceiveProps(newProps: TimeSelectorProps) {
    const { hours, minutes, seconds } = newProps;
    this.time = { hours, minutes, seconds };
  }

  render() {
    const { hours, minutes, seconds } = this.time;

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
    const updatedData = Object.assign(
      {},
      this.time,
      { [property]: number },
    );

    this.props.onChange(updatedData);
  }

  updateDataByProperty = (property: string, lastNumber: number, operation: typeof inc) => () => {
    const selectedNumber = this.time[property];
    const update = { [property]: select(createArrayOfNumbersOf(0)(lastNumber), selectedNumber, operation) };

    const updatedData = Object.assign(
      {},
      this.time,
      update,
    );

    this.props.onChange(updatedData);
  }
}
