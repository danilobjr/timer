import * as React from 'react';
import { SFC } from 'react';
import { TimerButton, ExpandableTimer } from 'components';
import { Countdown } from 'models';
import { IconName } from 'icons';

type CountdownTimerProps = {
  isEdition: boolean;
  countdown: Countdown;
  onClickRemove: () => void;
  onClickPause: () => void;
  onClickReset: () => void;
  onClickStart: () => void;
  onClickStop: () => void;
};

export const CountdownTimer: SFC<CountdownTimerProps> = (props) => {
  const {
    isEdition,
    countdown,
    onClickRemove,
    onClickPause,
    onClickReset,
    onClickStart,
    onClickStop,
  } = props;

  const { milliseconds, paused, startAt, alarmSoundEnabled } = countdown;

  const resetButtonHidden = isEdition || (paused && milliseconds === startAt);
  const timerMainButtonDisabled = (isEdition || countdown.milliseconds === 0) && !alarmSoundEnabled;
  // TODO: move this to an util for reuse
  const mainButtonIcon: IconName = !!alarmSoundEnabled ? 'stop' : !!paused ? 'play' : 'pause';

  return (
    <ExpandableTimer
      expandButtonHidden={isEdition}
      mainButtonDisabled={timerMainButtonDisabled}
      mainButtonIcon={mainButtonIcon}
      regressive
      resetButtonHidden={resetButtonHidden}
      startAt={startAt}
      time={countdown}
      onClickPause={onClickPause}
      onClickReset={onClickReset}
      onClickStart={onClickStart}
      onClickStop={onClickStop}
      renderActions={() => mainButtonIcon !== 'stop' && (
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
