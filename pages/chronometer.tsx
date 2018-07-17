import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ChronometerLaps, Timer, TimerButton, PageContent } from 'components';
import { State } from 'src/redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actions } from 'src/redux/modules/chronometer';

type ChronometerPageProps = StateToProps & DispatchToProps;

export class ChronometerPage extends Component<ChronometerPageProps> {
  render() {
    const { chronometer, laps, reset, start, stop } = this.props;

    return (
      <PageContent className="-chronometer">
        <Timer
          noInfo
          showHundredths
          time={chronometer}
          onClickStart={start}
          onClickPause={stop}
        >
          <TimerButton
            icon="reset"
            title="Reset"
            hideButton={this.isResetHidden()}
            onClick={reset}
          />

          <TimerButton
            icon="flag"
            title="Laps"
            hideButton={this.isLapsHidden()}
            onClick={this.registerLap}
          />
        </Timer>

        <ChronometerLaps laps={laps} />
      </PageContent>
    );
  }

  isResetHidden = () => {
    const { milliseconds, paused } = this.props.chronometer;
    return !paused || milliseconds === 0;
  }

  isLapsHidden = () => this.props.chronometer.paused;

  registerLap = () => {
    const { chronometer, registerLap } = this.props;
    registerLap(chronometer.milliseconds);
  }
}

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = ({ chronometer, laps }: State) => ({
  chronometer,
  laps,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChronometerPage);
