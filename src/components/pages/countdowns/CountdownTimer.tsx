import * as React from 'react';
import { Component } from 'react';
import { Timer, TimerButton } from 'components/common';

type CountdownTimerProps = {
  name?: string;
  time: number;
  isEdition?: boolean;
  onClickRemove?: () => void;
};

// type InternalProps = ExternalProps & MapStateToProps;
type CountdownTimerState = Readonly<typeof initialState>;

const initialState = {
  hideResetButton: true,
};

export class CountdownTimer extends Component<CountdownTimerProps, CountdownTimerState> {
  readonly state: CountdownTimerState = initialState;

  static defaultProps: Partial<CountdownTimerProps> = {
    name: 'Timer',
    isEdition: false,
    onClickRemove: () => null,
  };

  render() {
    const { name, time, isEdition, onClickRemove } = this.props;
    const { hideResetButton } = this.state;

    return (
      <Timer
        // ref="timer"
        name={name}
        isRegressive
        startTime={time}
        disableStartPauseButton={isEdition}
        hideExpandButton={isEdition}
        onStartCounting={this.showResetButton.bind(this)}
        onReset={this.hideResetButton.bind(this)}
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
          hideButton={hideResetButton || isEdition}
          onClick={this.resetTimer.bind(this)}
        />
      </Timer>
    );
  }

  showResetButton() {
    this.setState({ hideResetButton: false });
  }

  hideResetButton() {
    this.setState({ hideResetButton: true });
  }

  resetTimer() {
    (this.refs.timer as any).getWrappedInstance().reset();
  }
}

// interface MapStateToProps {
//   isLightThemeOn: boolean;
// }

// const mapStateToProps = (state: any) => ({
//   isLightThemeOn: state.isLightThemeOn,
// });

// export const CountdownTimer = connect(mapStateToProps)(CountdownTimerComponent);
