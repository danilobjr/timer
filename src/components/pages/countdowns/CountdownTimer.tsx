import * as React from 'react';
import { Component } from 'react';
import { Timer, TimerButton } from 'components/common';
import { Countdown } from 'models';

type CountdownTimerProps = {
  isEdition: boolean;
  countdown: Countdown;
  onClickRemove: () => void;
  onClickPause: () => void;
  onClickReset: () => void;
  onClickStart: () => void;
  onClickToggleExpand: () => void;
};

// type InternalProps = ExternalProps & MapStateToProps;
// type CountdownTimerState = Readonly<typeof initialState>;

// const initialState = {
//   hideResetButton: true,
// };

export class CountdownTimer extends Component<CountdownTimerProps> {
  // readonly state: CountdownTimerState = initialState;

  render() {
    const {
      isEdition,
      countdown,
      onClickRemove,
      onClickPause,
      onClickReset,
      onClickStart,
      onClickToggleExpand,
    } = this.props;
    // const { hideResetButton } = this.state;
    const { startAt, ...otherProps } = countdown;

    return (
      <Timer
        disableStartPauseButton={isEdition}
        hideExpandButton={isEdition}
        startAt={startAt}
        time={otherProps}
        onClickPause={onClickPause}
        onClickStart={onClickStart}
        onClickToggleExpand={onClickToggleExpand}
      >
        <TimerButton
          className="remove"
          icon="trash"
          title="Remove"
          hideButton={!isEdition}
          onClick={onClickRemove}
        />

        <TimerButton
          // lightTheme={isLightThemeOn}
          className="reset"
          icon="reset"
          title="Reset"
          hideButton={this.shouldHideResetButton()}
          onClick={onClickReset}
        />
      </Timer>
    );
  }

  shouldHideResetButton = () => {
    const { countdown, isEdition } = this.props;
    const { milliseconds, paused, startAt } = countdown;
    return isEdition || (paused && milliseconds === startAt);
  }

  // showResetButton() {
  //   this.setState({ hideResetButton: false });
  // }

  // hideResetButton() {
  //   this.setState({ hideResetButton: true });
  // }
}
