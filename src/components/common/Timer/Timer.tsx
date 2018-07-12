import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Watch } from './Watch';
import { CountdownWatch } from './CountdownWatch';
import { TimerActions } from './TimerActions';
import { turnOnLightTheme, turnOffLightTheme } from './actions';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';
import { add, subtract } from 'helpers';
import { timeToString } from './localHelpers';

interface TimerComponentExternalProps {
  name?: string;
  isRegressive?: boolean;
  startTime?: number;
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  showHundredths?: boolean;
  onStartCounting?: () => void;
  onPause?: () => void;
  onReset?: () => void;
}

interface TimerComponentInternalProps extends TimerComponentExternalProps {
  turnOnLightTheme: () => void;
  turnOffLightTheme: () => void;
  enableBackButton: () => void;
  disableBackButton: () => void;
  setBackButtonCallback: (callback: Function) => void;
}

interface TimerComponentState {
  counter: number;
  expanded: boolean;
  paused: boolean;
}

export class TimerComponent extends Component<TimerComponentInternalProps, TimerComponentState> {
  static defaultProps: TimerComponentExternalProps = {
    name: 'Timer',
    isRegressive: false,
    startTime: 0,
    disableStartPauseButton: false,
    hideExpandButton: false,
    showHundredths: false,
    onStartCounting: () => null,
    onPause: () => null,
    onReset: () => null,
  };

  private interval: any = null;
  private oneSecond: number = 1000;
  private oneHundredth: number = 10;

  constructor(props: TimerComponentInternalProps) {
    super(props);

    this.state = {
      paused: true,
      counter: 0,
      expanded: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hideExpandButton } = this.props;
    const { paused, expanded } = this.state;

    return (
      <div className={this.renderTimerCssClasses()}>
        {this.renderWatch()}

        <TimerActions
          lightTheme={expanded}
          disableStartPauseButton={this.shouldDisableStartPauseButton()}
          showPauseIcon={!paused}
          hideExpandButton={expanded || hideExpandButton}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickStartPauseButton={this.togglePaused.bind(this)}
          onClickExpandButton={this.toggleExpanded.bind(this)}
          onClickShrinkButton={this.toggleExpanded.bind(this)}
        >
          {this.props.children}
        </TimerActions>

        {this.renderInfo()}
      </div>
    );
  }

  renderTimerCssClasses() {
    return classNames(
      'timer',
      {
        '-no-info': !this.props.isRegressive,
        '-expanded': this.state.expanded,
      },
    );
  }

  renderWatch() {
    const { counter, expanded } = this.state;
    const { startTime, showHundredths } = this.props;

    if (this.props.isRegressive) {
      return <CountdownWatch currentTime={counter} totalTime={startTime} lightTheme={expanded} />;
    }

    return <Watch time={counter} showHundredths={showHundredths} lightTheme={expanded} />;
  }

  renderInfo() {
    const { expanded } = this.state;
    const { name, startTime, isRegressive } = this.props;

    if (isRegressive) {
      return (
        <div className="info">
          <span className="name">{name}</span>
          <CountdownWatch className={classNames({ 'h-hidden': expanded })} totalTime={startTime} />
        </div>
      );
    }

    return null;
  }

  shouldHideResetButton() {
    const { paused, counter } = this.state;
    return paused && counter === 0;
  }

  shouldDisableStartPauseButton() {
    const { startTime, disableStartPauseButton, isRegressive } = this.props;
    const { paused, counter } = this.state;

    if (isRegressive) {
      return (paused && counter === startTime) || disableStartPauseButton;
    }

    return disableStartPauseButton;
  }

  calculatePercentageProgress() {
    const { isRegressive, startTime } = this.props;
    const { paused, counter } = this.state;

    if (paused && counter === 0) {
      return 0;
    }

    if (isRegressive) {
      const remainingTime = startTime - counter;
      return remainingTime / startTime;
    }

    return counter / (this.oneSecond * 60);
  }

  stopIfTimeIsOver() {
    const timeIsOver = this.props.startTime === this.state.counter;
    // tslint:disable-next-line:no-unused-expression
    timeIsOver && this.setState({ paused: true });

    if (timeIsOver) {
      clearInterval(this.interval);
      // notify(this.props.name, { body: timeToString(this.props.startTime) });
      alert(`Finished: ${timeToString(this.props.startTime)}`);
    }
  }

  resetCounter() {
    this.setState({ counter: 0 });
  }

  startCounting() {
    this.interval = setInterval(() => {
      this.updateCounter();
      this.stopIfTimeIsOver();
    }, this.oneHundredth);

    // tslint:disable-next-line:no-unused-expression
    this.props.onStartCounting && this.props.onStartCounting();
  }

  updateCounter() {
    const { paused, counter } = this.state;
    let updateCounter = this.props.isRegressive ? subtract(counter) : add(counter);

    if (!paused) {
      this.setState({ counter: add(counter)(this.oneHundredth) });
    }
  }

  togglePaused() {
    this.state.paused ? this.startCounting() : clearInterval(this.interval);
    // tslint:disable-next-line:no-unused-expression
    !this.state.paused && this.props.onPause();
    this.setState({ paused: !this.state.paused });
  }

  toggleExpanded() {
    this.state.expanded ? this.shrink() : this.expand();
  }

  expand() {
    const { turnOnLightTheme, enableBackButton, setBackButtonCallback } = this.props;

    turnOnLightTheme();
    enableBackButton();
    setBackButtonCallback(this.shrink.bind(this));
    this.setState({ expanded: true });
  }

  shrink() {
    const { turnOffLightTheme, disableBackButton } = this.props;

    disableBackButton();
    turnOffLightTheme();
    this.setState({ expanded: false });
  }

  reset() {
    this.setState({ counter: 0 });

    if (this.state.paused) {
      this.props.onReset();
    }
  }

  getCurrentTime() {
    return this.state.counter;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  turnOnLightTheme: () => dispatch(turnOnLightTheme()),
  turnOffLightTheme: () => dispatch(turnOffLightTheme()),
  enableBackButton: () => dispatch(enableBackButton()),
  disableBackButton: () => dispatch(disableBackButton()),
  setBackButtonCallback: (callback: any) => dispatch(setBackButtonCallback(callback)),
});

export const Timer = connect(null, mapDispatchToProps, null, { withRef: true })(TimerComponent);
