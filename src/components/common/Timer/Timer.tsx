import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { Watch } from './Watch';
import { TimerActions } from './TimerActions';
import { Time } from 'models';
import { FlexSpace } from 'components';

export type TimerProps = {
  disableStartPauseButton?: boolean;
  expanded?: boolean;
  hideExpandButton?: boolean;
  noInfo?: boolean;
  showHundredths?: boolean;
  startAt?: number;
  time: Partial<Time>;
  onClickPause?: () => void;
  onClickStart?: () => void;
  onClickToggleExpansion?: () => void;
};

export class Timer extends Component<TimerProps> {
  static defaultProps: Partial<TimerProps> = {
    disableStartPauseButton: false,
    expanded: false,
    hideExpandButton: false,
    noInfo: false,
    showHundredths: false,
    startAt: 0,
    onClickPause: () => null,
    onClickStart: () => null,
    onClickToggleExpansion: () => null,
  };

  render() {
    const {
      disableStartPauseButton,
      expanded,
      hideExpandButton,
      noInfo,
      showHundredths,
      startAt,
      time,
      onClickToggleExpansion,
    } = this.props;

    const { milliseconds, name, paused } = time;

    return (
      <div
        className={classNames(
          'timer',
          !!noInfo && '-no-info',
          !!expanded && '-expanded',
          // !!isRegressive && '-no-info',
        )}
      >
        {!!expanded && <FlexSpace />}

        <Watch
          time={milliseconds}
          showHundredths={showHundredths}
        />

        {!!expanded && <FlexSpace />}

        <TimerActions
          disableStartPauseButton={disableStartPauseButton}
          showPauseIcon={!paused}
          hideExpandButton={expanded || hideExpandButton}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickStartPauseButton={this.togglePause}
          onToggleExpandButton={onClickToggleExpansion}
        >
          {this.props.children}
        </TimerActions>

        {!noInfo && (
          <div className="info">
            <span className="name">{name}</span>
            <Watch className={classNames({ 'h-hidden': expanded })} time={startAt} />
          </div>
        )}
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
