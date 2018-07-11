import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { time as toTime, milliseconds } from 'helpers';
import { padLeftWithZero } from './localHelpers';

const renderWatchCssClasses = ({ className, lightTheme }: WatchProps) => (
  classNames(
    'watch',
    className,
    {
      '-lighttheme': lightTheme,
    }
  )
)

const renderUnitCssClasses = (time: number, value: number) => (
  classNames(
    'unit',
    { '-active': time >= value }
  )
)

const renderHundredths = (hundredths: number) => (
  <span className="unit -hundredths -active" title="Hundredths">
    {padLeftWithZero(hundredths)}
  </span>
);

export interface WatchProps extends HTMLProps<HTMLDivElement> {
  lightTheme?: boolean;
  showHundredths?: boolean;
  time?: number;
}

export const Watch: SFC<WatchProps> = ({ showHundredths, time, ...otherProps }) => {
  const [hours, minutes, seconds, hundredths] = toTime(time);
  const oneMinute = milliseconds(0, 1);
  const oneHour = milliseconds(1);

  return (
    <div className={renderWatchCssClasses(otherProps)}>
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
}

Watch.defaultProps = {
  lightTheme: false,
  showHundredths: false,
  time: 0,
};
