import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { Watch } from './Watch';
import { TimerActions } from './TimerActions';
import { Time } from 'models';

const initialState = { expanded: false };

type TimerProps = {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  showHundredths?: boolean;
  startAt?: number;
  time: Time;
  onClickPause?: () => void;
  onClickStart?: () => void;
};

type TimerState = Readonly<typeof initialState>;

// TODO: bring toggleExpand from redux to local state

export class Timer extends Component<TimerProps, TimerState> {
  readonly state: TimerState = initialState;

  static defaultProps: Partial<TimerProps> = {
    disableStartPauseButton: false,
    hideExpandButton: false,
    showHundredths: false,
    startAt: 0,
    onClickPause: () => null,
    onClickStart: () => null,
  };

  render() {
    const {
      disableStartPauseButton,
      hideExpandButton,
      showHundredths,
      startAt,
      time,
    } = this.props;

    const { milliseconds, name, paused } = time;
    const { expanded } = this.state;

    return (
      <div
        className={classNames(
          'timer',
          !!expanded && '-expanded',
          // !!isRegressive && '-no-info',
        )}
      >
        <Watch
          time={milliseconds}
          showHundredths={showHundredths}
        />

        <TimerActions
          disableStartPauseButton={disableStartPauseButton}
          showPauseIcon={!paused}
          hideExpandButton={expanded || hideExpandButton}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickStartPauseButton={this.togglePause}
          onToggleExpandButton={this.toggleExpanded}
        >
          {this.props.children}
        </TimerActions>

        <div className="info">
          <span className="name">{name}</span>
          <Watch className={classNames({ 'h-hidden': expanded })} time={startAt} />
        </div>
      </div>
    );
  }

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

  togglePause = () => {
    const { time, onClickPause, onClickStart } = this.props;
    time.paused ? onClickStart() : onClickPause();
  }

  toggleExpanded = () => this.setState(prevState => ({ expanded: !prevState.expanded }));
}
