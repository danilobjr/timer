import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { Watch } from './Watch';
import { TimerActions } from './TimerActions';
import { Time } from 'models';

type TimerProps = {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  showHundredths?: boolean;
  startAt?: number;
  time: Time;
  onClickPause?: () => void;
  onClickStart?: () => void;
  onClickToggleExpand?: () => void;
};

export class Timer extends Component<TimerProps> {
  static defaultProps: Partial<TimerProps> = {
    disableStartPauseButton: false,
    hideExpandButton: false,
    showHundredths: false,
    startAt: 0,
    onClickPause: () => null,
    onClickStart: () => null,
    onClickToggleExpand: () => null,
  };

  render() {
    const {
      disableStartPauseButton,
      hideExpandButton,
      showHundredths,
      startAt,
      time,
      onClickToggleExpand,
    } = this.props;

    const { expanded, milliseconds, name, paused } = time;

    return (
      <div
        className={classNames(
          'timer',
          // TODO: check if this render 'undefined' in DOM tree
          !!expanded && '-expanded',
          // !!isRegressive && '-no-info',
        )}
      >
        <Watch
          time={milliseconds}
          showHundredths={showHundredths}
          lightTheme={expanded}
        />

        <TimerActions
          lightTheme={expanded}
          disableStartPauseButton={disableStartPauseButton}
          showPauseIcon={!paused}
          hideExpandButton={expanded || hideExpandButton}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickStartPauseButton={this.togglePause}
          onClickExpandButton={onClickToggleExpand}
          onClickShrinkButton={onClickToggleExpand}
        >
          {this.props.children}
        </TimerActions>

        <div className="info">
          <span className="name">{name}</span>
          {/* TODO: remove prefix 'h-' from help CSS classes */}
          <Watch className={classNames({ 'h-hidden': expanded })} time={startAt} />
        </div>
      </div>
    );
  }

  // renderTimerCssClasses() {
  //   return classNames(
  //     'timer',
  //     {
  //       // '-no-info': !this.props.isRegressive,
  //       '-expanded': this.props.expanded,
  //     },
  //   );
  // }

  // renderWatch() {
  //   const { expanded, startAt, showHundredths, time } = this.props;

  //   if (this.props.isRegressive) {
  //     return <CountdownWatch currentTime={time} totalTime={startAt} lightTheme={expanded} />;
  //   }

  //   return <Watch time={time} showHundredths={showHundredths} lightTheme={expanded} />;
  // }

  // renderInfo() {
  //   const { expanded } = this.state;
  //   const { name, startAt, isRegressive } = this.props;

  //   if (isRegressive) {
  //     return (
  //       <div className="info">
  //         <span className="name">{name}</span>
  //         <CountdownWatch className={classNames({ 'h-hidden': expanded })} totalTime={startAt} />
  //       </div>
  //     );
  //   }

  //   return null;
  // }

  // shouldHideResetButton() {
  //   const { paused, counter } = this.state;
  //   return paused && counter === 0;
  // }

  // shouldDisableStartPauseButton() {
  //   const { startAt, disableStartPauseButton, isRegressive } = this.props;
  //   const { paused, counter } = this.state;

  //   if (isRegressive) {
  //     return (paused && counter === startAt) || disableStartPauseButton;
  //   }

  //   return disableStartPauseButton;
  // }

  calculatePercentageProgress() {
    const { startAt, time } = this.props;
    const { paused, milliseconds } = time;

    const doNotStartedYet = paused && (milliseconds === 0 || milliseconds === startAt);

    if (doNotStartedYet) {
      return 0;
    }

    // if (isRegressive) {
      // return remainingTime / startAt;
      return milliseconds / startAt;
    // }

    // return milliseconds / TimeInMilliseconds.OneMinute;
  }

  // stopIfTimeIsOver() {
  //   const timeIsOver = this.props.startAt === this.state.counter;
  //   // tslint:disable-next-line:no-unused-expression
  //   timeIsOver && this.setState({ paused: true });

  //   if (timeIsOver) {
  //     clearInterval(this.interval);
  //     // notify(this.props.name, { body: timeToString(this.props.startTime) });
  //     alert(`Finished: ${timeToString(this.props.startAt)}`);
  //   }
  // }

  // resetCounter() {
  //   this.setState({ counter: 0 });
  // }

  // startCounting() {
  //   this.interval = setInterval(() => {
  //     this.updateCounter();
  //     this.stopIfTimeIsOver();
  //   }, this.oneHundredth);

  //   // tslint:disable-next-line:no-unused-expression
  //   this.props.onStart && this.props.onStart();
  // }

  // updateCounter() {
  //   const { paused, counter } = this.state;
  //   let updateCounter = this.props.isRegressive ? subtract(counter) : add(counter);

  //   if (!paused) {
  //     this.setState({ counter: add(counter)(this.oneHundredth) });
  //   }
  // }

  togglePause = () => {
    const { time, onClickPause, onClickStart } = this.props;
    time.paused ? onClickStart() : onClickPause();
  }

  // toggleExpanded() {
  //   this.state.expanded ? this.shrink() : this.expand();
  // }

  // expand() {
  //   const { turnOnLightTheme, enableBackButton, setBackButtonCallback } = this.props;

  //   turnOnLightTheme();
  //   enableBackButton();
  //   setBackButtonCallback(this.shrink.bind(this));
  //   this.setState({ expanded: true });
  // }

  // shrink() {
  //   const { turnOffLightTheme, disableBackButton } = this.props;

  //   disableBackButton();
  //   turnOffLightTheme();
  //   this.setState({ expanded: false });
  // }

  // reset() {
  //   this.setState({ counter: 0 });

  //   if (this.state.paused) {
  //     this.props.onReset();
  //   }
  // }

  // getCurrentTime() {
  //   return this.state.counter;
  // }
}
