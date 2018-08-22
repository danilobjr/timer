import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { IconName, Icons } from 'icons';
import { capitalize } from 'utils';

export type TimerMainButtonProps = {
  icon: IconName;
  percentageProgress?: number;
} & HTMLProps<HTMLButtonElement>;

export const TimerMainButton: SFC<TimerMainButtonProps> = ({ icon, percentageProgress, ...otherProps }) => (
  <button
    {...otherProps}
    className={renderMainCssClasses(otherProps)}
    title={capitalize(icon)}
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

    {React.createElement(Icons[icon])}
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
