import * as React from 'react';
import { SFC } from 'react';
import { NumberSelector } from 'components/common';
import { inc, dec } from 'utils';
import { StringKeyValuePair } from 'models';
import { createArrayOfNumbers, select } from './localUtils';

type TimeSelectorProps = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onChange?: (time: StringKeyValuePair) => void;
};

export const TimeSelector: SFC<TimeSelectorProps> = (props) => (
  <div className="time-selector">
    <NumberSelector
      label="hours"
      selected={props.hours}
      rangeSize={23}
      onSelectNext={updateDataByProperty(props, 'hours', 23, inc)}
      onSelectPrevious={updateDataByProperty(props, 'hours', 23, dec)}
      onSelectExactly={updateData(props, 'hours')}
    />

    <NumberSelector
      label="minutes"
      selected={props.minutes}
      rangeSize={59}
      onSelectNext={updateDataByProperty(props, 'minutes', 59, inc)}
      onSelectPrevious={updateDataByProperty(props, 'minutes', 59, dec)}
      onSelectExactly={updateData(props, 'minutes')}
    />

    <NumberSelector
      label="seconds"
      selected={props.seconds}
      rangeSize={59}
      onSelectNext={updateDataByProperty(props, 'seconds', 59, inc)}
      onSelectPrevious={updateDataByProperty(props, 'seconds', 59, dec)}
      onSelectExactly={updateData(props, 'seconds')}
    />
  </div>
);

const updateData = (props: TimeSelectorProps, property: string) => (number: number) => {
  const updatedData = {
    ...props,
    [property]: number,
  };

  props.onChange(updatedData);
};

// TODO: refactor
const updateDataByProperty = (props: TimeSelectorProps, property: string, lastNumber: number, operation: typeof inc) => () => {
  const selectedNumber = (props as StringKeyValuePair)[property];
  const update = { [property]: select(createArrayOfNumbers(0)(lastNumber), selectedNumber, operation) };

  const updatedData = {
    ...props,
    ...update,
  };

  props.onChange(updatedData);
};
