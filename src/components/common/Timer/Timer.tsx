import * as React from 'react';
import * as classNames from 'classnames';
import { Component, ReactNode } from 'react';
import { Watch } from './Watch';
import { TimerActions } from './TimerActions';
import { Time, TimeInMilliseconds, Countdown } from 'models';
import { FlexSpace } from 'components';
import { IconName } from 'icons';

export type TimerProps = {
  expandButtonHidden?: boolean;
  expanded?: boolean;
  mainButtonDisabled?: boolean;
  mainButtonIcon: IconName;
  noInfo?: boolean;
  regressive?: boolean;
  resetButtonHidden?: boolean;
  showHundredths?: boolean;
  startAt?: number;
  time: Partial<Time>;
  onClickPause?: () => void;
  onClickReset?: () => void;
  onClickStart?: () => void;
  onClickStop?: () => void;
  onClickToggleExpansion?: () => void;
  renderActions?: () => ReactNode;
};

export class Timer extends Component<TimerProps> {
  static defaultProps: Partial<TimerProps> = {
    mainButtonDisabled: false,
    expanded: false,
    expandButtonHidden: false,
    resetButtonHidden: false,
    noInfo: false,
    regressive: false,
    showHundredths: false,
    startAt: 0,
    onClickPause: () => null,
    onClickReset: () => null,
    onClickStart: () => null,
    onClickStop: () => null,
    onClickToggleExpansion: () => null,
    renderActions: () => null,
  };

  render() {
    const {
      children,
      mainButtonDisabled,
      expanded,
      expandButtonHidden,
      resetButtonHidden,
      noInfo,
      renderActions,
      mainButtonIcon,
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
          disableMainButton={mainButtonDisabled}
          mainButton={mainButtonIcon}
          hideExpandButton={expanded || expandButtonHidden}
          hideResetButton={resetButtonHidden}
          hideShrinkButton={!expanded}
          percentageProgress={this.calculatePercentageProgress()}
          onClickResetButton={onClickReset}
          onClickMainButton={this.handleMainButtonClick}
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

  handleMainButtonClick = () => {
    const { time, onClickPause, onClickStart, onClickStop } = this.props;

    // TODO: move all props from Countdown model to Time model
    if ((time as Countdown).alarmSoundEnabled) {
      onClickStop();
      return;
    }

    time.paused ? onClickStart() : onClickPause();
  }
}
