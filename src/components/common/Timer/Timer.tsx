import * as React from 'react';
import * as classNames from 'classnames';
import { Component, ReactNode } from 'react';
import { Watch } from './Watch';
import { TimerActions } from './TimerActions';
import { Time, TimeInMilliseconds } from 'models';
import { FlexSpace } from 'components';
import { TimerMainButtonProps } from 'components/common/Timer/TimerMainButton';

export type TimerProps = {
  disableMainButton?: boolean;
  expanded?: boolean;
  hideExpandButton?: boolean;
  hideResetButton?: boolean;
  noInfo?: boolean;
  regressive?: boolean;
  showHundredths?: boolean;
  showWhichMainButton: TimerMainButtonProps['showWhichButton'];
  startAt?: number;
  time: Partial<Time>;
  onClickPause?: () => void;
  onClickReset?: () => void;
  onClickStart?: () => void;
  onClickToggleExpansion?: () => void;
  renderActions?: () => ReactNode;
};

export class Timer extends Component<TimerProps> {
  static defaultProps: Partial<TimerProps> = {
    disableMainButton: false,
    expanded: false,
    hideExpandButton: false,
    hideResetButton: false,
    noInfo: false,
    regressive: false,
    showHundredths: false,
    startAt: 0,
    onClickPause: () => null,
    onClickReset: () => null,
    onClickStart: () => null,
    onClickToggleExpansion: () => null,
    renderActions: () => null,
  };

  render() {
    const {
      children,
      disableMainButton,
      expanded,
      hideExpandButton,
      hideResetButton,
      noInfo,
      renderActions,
      showWhichMainButton,
      showHundredths,
      startAt,
      time,
      onClickReset,
      onClickToggleExpansion,
    } = this.props;

    const { milliseconds, name } = time;

    return (
      <div
        className={classNames(
          'timer',
          !!noInfo && '-no-info',
          !!expanded && '-expanded',
        )}
      >
        {!!expanded && <FlexSpace />}

        <Watch
          time={milliseconds}
          showHundredths={showHundredths}
        />

        {!!expanded && <FlexSpace />}

        <TimerActions
          disableMainButton={disableMainButton}
          showWhichMainButton={showWhichMainButton}
          hideExpandButton={expanded || hideExpandButton}
          hideResetButton={hideResetButton}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickResetButton={onClickReset}
          onClickMainButton={this.togglePause}
          onToggleExpandButton={onClickToggleExpansion}
        >
          {renderActions()}
        </TimerActions>

        {!noInfo && (
          <div className="info">
            <span className="name">{name}</span>
            <Watch className={classNames({ 'h-hidden': expanded })} time={startAt} />
          </div>
        )}

        {children}
      </div>
    );
  }

  calculatePercentageProgress() {
    const { regressive, startAt, time } = this.props;
    const { paused, milliseconds } = time;

    const doNotStartedYet = paused && (milliseconds === 0 || milliseconds === startAt);

    if (doNotStartedYet) {
      return 0;
    }

    if (regressive) {
      return milliseconds / startAt;
    }

    return milliseconds / TimeInMilliseconds.Minute;
  }

  togglePause = () => {
    const { time, onClickPause, onClickStart } = this.props;
    time.paused ? onClickStart() : onClickPause();
  }
}
