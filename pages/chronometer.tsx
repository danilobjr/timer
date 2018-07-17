import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ChronometerResults, Timer, TimerButton, PageContent } from 'components';
import { State } from 'src/redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actions } from 'src/redux/modules/chronometer';

type ChronometerPageProps = StateToProps & DispatchToProps;

export class ChronometerPage extends Component<ChronometerPageProps> {
  render() {
    const { chronometer, laps, start, stop } = this.props;

    return (
      <PageContent className="-chronometer">
        <Timer
          // ref="timer"
          showHundredths
          time={chronometer}
          onClickStart={start}
          onClickPause={stop}
        >
          <TimerButton
            icon="reset"
            title="Reset"
            hideButton={this.isResetHidden()}
            onClick={console.log}
          />

          <TimerButton
            icon="flag"
            title="Laps"
            hideButton={this.isLapsHidden()}
            onClick={console.log}
          />
        </Timer>

        <ChronometerResults results={laps} />
      </PageContent>
    );
  }

  isResetHidden = () => {
    const { milliseconds, paused } = this.props.chronometer;
    return !paused || milliseconds === 0;
  }

  isLapsHidden = () => this.props.chronometer.paused;
}

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = ({ chronometer, laps }: State) => ({
  chronometer,
  laps,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChronometerPage);
