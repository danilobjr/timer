import * as React from 'react';
import { SFC } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { TimerButton } from './TimerButton';

type TimerActionsProps = {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  hideResetButton?: boolean;
  hideShrinkButton?: boolean;
  percentageProgress?: number;
  showPauseIcon?: boolean;
  onClickResetButton: () => void;
  onClickStartPauseButton: () => void;
  onToggleExpandButton: () => void;
};

export const TimerActions: SFC<TimerActionsProps> = ({
  children,
  disableStartPauseButton,
  hideExpandButton,
  hideResetButton,
  hideShrinkButton,
  percentageProgress,
  showPauseIcon,
  onClickResetButton,
  onClickStartPauseButton,
  onToggleExpandButton,
}) => (
    <div className="timer-actions">
      {children}

      <TimerButton
        className="reset"
        icon="reset"
        title="Reset"
        hideButton={hideResetButton}
        onClick={onClickResetButton}
      />

      <StartPauseButton
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
        onClick={onToggleExpandButton}
      />

      <TimerButton
        className="shrink"
        icon="compress"
        title="Shrink"
        hideButton={hideShrinkButton}
        position="right"
        onClick={onToggleExpandButton}
      />
    </div>
  );

TimerActions.defaultProps = {
  disableStartPauseButton: false,
  hideExpandButton: false,
  hideShrinkButton: true,
  percentageProgress: 0,
  showPauseIcon: false,
};
