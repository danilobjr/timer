import * as React from 'react';
import { Component } from 'react';
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

// TODO: refactor this to a SFC
export class CountdownTimer extends Component<CountdownTimerProps> {
  render() {
    const {
      isEdition,
      countdown,
      onClickRemove,
      onClickPause,
      onClickReset,
      onClickStart,
    } = this.props;

    const { startAt, ...otherProps } = countdown;

    return (
      <ExpandableTimer
        disableStartPauseButton={this.isStartPauseButtonDisabled()}
        hideExpandButton={isEdition}
        hideResetButton={this.isHideResetButton()}
        regressive
        startAt={startAt}
        time={otherProps}
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
  }

  isHideResetButton = () => {
    const { countdown, isEdition } = this.props;
    const { milliseconds, paused, startAt } = countdown;
    return isEdition || (paused && milliseconds === startAt);
  }

  isStartPauseButtonDisabled = () => {
    const { countdown, isEdition } = this.props;
    return isEdition || countdown.milliseconds === 0;
  }
}
