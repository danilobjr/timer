import * as React from 'react';
import { SFC } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { TimerButton } from './TimerButton';

type TimerActionsProps = {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  hideShrinkButton?: boolean;
  percentageProgress?: number;
  showPauseIcon?: boolean;
  onToggleExpandButton: () => void;
  onClickStartPauseButton: () => void;
};

export const TimerActions: SFC<TimerActionsProps> = ({
  children,
  hideExpandButton,
  hideShrinkButton,
  disableStartPauseButton,
  showPauseIcon,
  percentageProgress,
  onToggleExpandButton,
  onClickStartPauseButton,
}) => (
    <div className="timer-actions">
      {children}

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
