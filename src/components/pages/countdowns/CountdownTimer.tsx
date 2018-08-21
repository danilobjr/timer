import * as React from 'react';
import { SFC } from 'react';
import { TimerButton, ExpandableTimer } from 'components';
import { Countdown } from 'models';
import { TimerMainButtonType } from 'components';

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

  const { milliseconds, paused, startAt, alarmSoundEnabled } = countdown;

  const resetButtonHidden = isEdition || (paused && milliseconds === startAt);
  const timerMainButtonDisabled = (isEdition || countdown.milliseconds === 0) && !alarmSoundEnabled;
  // TODO: move this to an util for reuse
  const showWhichMainButton: TimerMainButtonType = !!alarmSoundEnabled ? 'stop' : !!paused ? 'play' : 'pause';

  return (
    <ExpandableTimer
      disableMainButton={timerMainButtonDisabled}
      hideExpandButton={isEdition}
      hideResetButton={resetButtonHidden}
      regressive
      mainButton={showWhichMainButton}
      startAt={startAt}
      time={countdown}
      onClickPause={onClickPause}
      onClickReset={onClickReset}
      onClickStart={onClickStart}
      renderActions={() => showWhichMainButton !== 'stop' && (
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
