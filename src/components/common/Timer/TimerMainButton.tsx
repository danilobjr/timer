import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { IconPlay, IconPause, IconStop } from 'icons';
import { capitalize } from 'utils';
import { TimerMainButtonType } from 'components/common/Timer/TimerMainButtonType';

export type TimerMainButtonProps = {
  button: TimerMainButtonType;
  percentageProgress?: number;
} & HTMLProps<HTMLButtonElement>;

export const TimerMainButton: SFC<TimerMainButtonProps> = ({ button, percentageProgress, ...otherProps }) => (
  <button
    {...otherProps}
    className={renderMainCssClasses(otherProps)}
    title={capitalize(button)}
  >
    <svg
      className="border"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="29" />
    </svg>

    <svg
      className="time-progress"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="29"
        style={{ strokeDashoffset: calculateStrokeDashoffsetSize(percentageProgress) }}
      />
    </svg>

    {button === 'play' && <IconPlay />}
    {button === 'pause' && <IconPause />}
    {button === 'stop' && <IconStop />}
  </button>
);

TimerMainButton.defaultProps = {
  percentageProgress: 0,
};

const renderMainCssClasses = ({ className }: Partial<TimerMainButtonProps>) => (
  classNames(
    'timer-main-button',
    className,
  )
);

const calculateStrokeDashoffsetSize = (percentageProgress: number) => (
  ((1 - percentageProgress) * 100) * 182 / 100 + 'px'
);
