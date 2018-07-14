import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import { IconPlay, IconPause } from 'components/common/Icons';

type StartPauseButtonProps = {
  showPause?: boolean;
  percentageProgress?: number;
} & HTMLProps<HTMLButtonElement>;

export const StartPauseButton: SFC<StartPauseButtonProps> = ({ showPause, percentageProgress, ...otherProps }) => (
  <button
    {...otherProps}
    className={renderMainCssClasses(otherProps)}
    title="Start/Pause"
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

    <IconPlay className={renderHiddenClassWhen(showPause)} />
    <IconPause className={renderHiddenClassWhen(!showPause)} />
  </button>
);

StartPauseButton.defaultProps = {
  showPause: false,
  percentageProgress: 0,
};

const renderMainCssClasses = ({ className }: Partial<StartPauseButtonProps>) => (
  classNames(
    'start-pause-button',
    className,
  )
);

const renderHiddenClassWhen = (isHidden: boolean) => (
  classNames({ 'h-hidden': isHidden })
);

const calculateStrokeDashoffsetSize = (percentageProgress: number) => (
  ((1 - percentageProgress) * 100) * 182 / 100 + 'px'
);
