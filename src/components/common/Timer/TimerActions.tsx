import * as React from 'react';
import { SFC } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { TimerButton } from './TimerButton';

type TimerActionsProps = {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  hideShrinkButton?: boolean;
  lightTheme?: boolean;
  percentageProgress?: number;
  showPauseIcon?: boolean;
  onClickExpandButton: () => void;
  onClickShrinkButton: () => void;
  onClickStartPauseButton: () => void;
};

export const TimerActions: SFC<TimerActionsProps> = ({
    children,
    hideExpandButton,
    hideShrinkButton,
    lightTheme,
    disableStartPauseButton,
    showPauseIcon,
    percentageProgress,
    onClickExpandButton,
    onClickShrinkButton,
    onClickStartPauseButton,
  }) => (
    <div className="timer-actions">
      {children}

      <StartPauseButton
        lightTheme={lightTheme}
        disabled={disableStartPauseButton}
        showPause={showPauseIcon}
        percentageProgress={percentageProgress}
        onClick={onClickStartPauseButton}
      />

      <TimerButton
        className="expand"
        icon="expand"
        title="Expand"
        hideButton={hideExpandButton}
        position="right"
        lightTheme={lightTheme}
        onClick={onClickExpandButton}
      />

      <TimerButton
        className="shrink"
        icon="compress"
        title="Shrink"
        hideButton={hideShrinkButton}
        position="right"
        lightTheme={lightTheme}
        onClick={onClickShrinkButton}
      />
    </div>
);

TimerActions.defaultProps = {
  disableStartPauseButton: false,
  hideExpandButton: false,
  hideShrinkButton: true,
  lightTheme: false,
  percentageProgress: 0,
  showPauseIcon: false,
};
