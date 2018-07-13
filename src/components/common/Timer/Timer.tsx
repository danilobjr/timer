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
}
