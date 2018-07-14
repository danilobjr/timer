import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { time as toTime, toMilliseconds } from 'helpers';
import { padLeftWithZero } from './localHelpers';

const renderUnitCssClasses = (time: number, value: number) => (
  classNames('unit', { '-active': time >= value })
);

const renderHundredths = (hundredths: number) => (
  <span className="unit -hundredths -active" title="Hundredths">
    {padLeftWithZero(hundredths)}
  </span>
);

export type WatchProps = {
  showHundredths?: boolean;
  time?: number;
} & HTMLProps<HTMLDivElement>;

export const Watch: SFC<WatchProps> = ({ className, showHundredths, time, ...otherProps }) => {
  const [hours, minutes, seconds, hundredths] = toTime(time);
  const oneMinute = toMilliseconds(0, 1);
  const oneHour = toMilliseconds(1);

  return (
    <div className={classNames('watch', className)} {...otherProps}>
      <span className={renderUnitCssClasses(time, oneHour)} title="Hours">
        {padLeftWithZero(hours)}
      </span>
      <span className={renderUnitCssClasses(time, oneMinute)} title="Minutes">
        {padLeftWithZero(minutes)}
      </span>
      <span className="unit -active" title="Seconds">
        {padLeftWithZero(seconds)}
      </span>
      {!!showHundredths && renderHundredths(hundredths)}
    </div>
  );
};

Watch.defaultProps = {
  showHundredths: false,
  time: 0,
};
