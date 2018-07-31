import * as React from 'react';
import { SFC } from 'react';
import { TimerButton, ExpandableTimer } from 'components';
import { Countdown } from 'models';

type CountdownTimerProps = {
  isEdition: boolean;
  countdown: Countdown;
  onClickRemove: () => void;
  onClickPause: () => void;
  onClickReset: () => void;
  onClickStart: () => void;
};

export const CountdownTimer: SFC<CountdownTimerProps> = (props) => {
  const {
    isEdition,
    countdown,
    onClickRemove,
    onClickPause,
    onClickReset,
    onClickStart,
  } = props;

  const { milliseconds, paused, startAt } = countdown;

  const resetButtonHidden = isEdition || (paused && milliseconds === startAt);
  const startPauseButtonDisabled = isEdition || countdown.milliseconds === 0;

  return (
    <ExpandableTimer
      disableStartPauseButton={startPauseButtonDisabled}
      hideExpandButton={isEdition}
      hideResetButton={resetButtonHidden}
      regressive
      startAt={startAt}
      time={countdown}
      onClickPause={onClickPause}
      onClickReset={onClickReset}
      onClickStart={onClickStart}
      renderActions={() => (
        <TimerButton
          className="remove"
          icon="trash"
          title="Remove"
          hideButton={!isEdition}
          onClick={onClickRemove}
        />
      )}
    />
  );
};
