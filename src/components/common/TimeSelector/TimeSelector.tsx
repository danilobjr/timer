import * as React from 'react';
import { SFC } from 'react';
import { NumberSelector } from 'components/common';
import { StringKeyValuePair } from 'models';

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
      value={props.hours}
      rangeSize={23}
      onChange={updateData(props, 'hours')}
    />

    <NumberSelector
      label="minutes"
      value={props.minutes}
      rangeSize={59}
      onChange={updateData(props, 'minutes')}
    />

    <NumberSelector
      label="seconds"
      value={props.seconds}
      rangeSize={59}
      onChange={updateData(props, 'seconds')}
    />
  </div>
);

const updateData = ({ onChange, ...otherProps }: TimeSelectorProps, property: string) => (number: number) => {
  const updatedData = {
    ...otherProps,
    [property]: number,
  };

  onChange(updatedData);
};
