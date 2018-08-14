import * as React from 'react';
import { SFC } from 'react';
import { TimerMainButton, TimerMainButtonProps } from './TimerMainButton';
import { TimerButton } from './TimerButton';

type TimerActionsProps = {
  disableMainButton?: boolean;
  hideExpandButton?: boolean;
  hideResetButton?: boolean;
  hideShrinkButton?: boolean;
  percentageProgress?: number;
  showWhichMainButton: TimerMainButtonProps['showWhichButton'];
  onClickResetButton: () => void;
  onClickMainButton: () => void;
  onToggleExpandButton: () => void;
};

export const TimerActions: SFC<TimerActionsProps> = ({
  children,
  disableMainButton,
  hideExpandButton,
  hideResetButton,
  hideShrinkButton,
  percentageProgress,
  showWhichMainButton,
  onClickResetButton,
  onClickMainButton,
  onToggleExpandButton,
}) => (
    <div className="timer-actions">
      {children}

      {showWhichMainButton !== 'stop' && (
        <TimerButton
          className="reset"
          icon="reset"
          title="Reset"
          hideButton={hideResetButton}
          onClick={onClickResetButton}
        />
      )}

      <TimerMainButton
        disabled={disableMainButton}
        showWhichButton={showWhichMainButton}
        percentageProgress={percentageProgress}
        onClick={onClickMainButton}
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
  disableMainButton: false,
  hideExpandButton: false,
  hideShrinkButton: true,
  percentageProgress: 0,
};
