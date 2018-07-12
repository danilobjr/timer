import * as React from 'react';
import { SFC } from 'react';
import { Watch, WatchProps } from './Watch';

const getRemainingTime = (props: CountdownWatchProps) => {
  return props.totalTime - props.currentTime;
};

type CountdownWatchProps = {
  currentTime?: number;
  lightTheme?: boolean;
  totalTime?: number;
} & WatchProps;

export const CountdownWatch: SFC<CountdownWatchProps> = ({ className, lightTheme, ...otherProps }) => (
  <Watch
    className={className}
    time={getRemainingTime(otherProps)}
    lightTheme={lightTheme}
  />
);

CountdownWatch.defaultProps = {
  currentTime: 0,
  lightTheme: false,
  totalTime: 0,
};
