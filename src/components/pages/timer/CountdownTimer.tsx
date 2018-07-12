import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { CountdownWatch, StartPauseButton, Timer, WatchCommandButton } from 'components/common';
// import { turnOnLightTheme, turnOffLightTheme } from './actions';
// import { notify } from 'native';

interface ExternalProps {
  name?: string;
  time: number;
  isEdition?: boolean;
  onClickRemoveButton?: () => void;
}

interface InternalProps extends ExternalProps, MapStateToProps { }

interface State {
  hideResetButton: boolean;
}

class CountdownTimerComponent extends Component<InternalProps, State> {
  static defaultProps: Partial<ExternalProps> = {
    name: 'Timer',
    isEdition: false,
    // hideRemoveButton: true,
    // hideResetButton: true,
    onClickRemoveButton: () => null,
  }

  constructor(props: InternalProps) {
    super(props);

    this.state = {
      hideResetButton: true
    };
  }

  render() {
    const { name, time, isEdition, isLightThemeOn,
      onClickRemoveButton } = this.props;
    const { hideResetButton } = this.state;

    return (
      <Timer
        ref="timer"
        name={name}
        isRegressive
        startTime={time}
        disableStartPauseButton={isEdition}
        hideExpandButton={isEdition}
        onStartCounting={this.showResetButton.bind(this)}
        onReset={this.hideResetButton.bind(this)}
      >
        <WatchCommandButton
          className="remove"
          icon="trash"
          title="Remove"
          hideButton={!isEdition}
          onClick={onClickRemoveButton}
        />
        <WatchCommandButton
          lightTheme={isLightThemeOn}
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

interface MapStateToProps {
  isLightThemeOn: boolean;
}

const mapStateToProps = (state: any) => ({
  isLightThemeOn: state.isLightThemeOn
})

export const CountdownTimer = connect(mapStateToProps)(CountdownTimerComponent);
