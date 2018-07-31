import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChronometerLaps, Timer, TimerButton, PageContent, Toggleable } from 'components';
import { State } from 'src/redux';
import { actions } from 'src/redux/modules/chronometer';

type ChronometerPageProps = StateToProps & DispatchToProps;

export class ChronometerPage extends Component<ChronometerPageProps> {
  render() {
    const { chronometer, laps, start, stop } = this.props;

    return (
      <PageContent className="-chronometer">
        <Toggleable>
          {({ active: expanded, toggle }) => (
            <>
              <Timer
                expanded={expanded}
                hideResetButton={this.isResetHidden()}
                noInfo
                showHundredths
                time={chronometer}
                onClickPause={stop}
                onClickReset={this.reset}
                onClickStart={start}
                onClickToggleExpansion={toggle}
                renderActions={() => (
                  <TimerButton
                    icon="flag"
                    title="Laps"
                    hideButton={this.isLapsHidden()}
                    onClick={this.registerLap}
                  />
                )}
              >
                {!!expanded && (
                  <ChronometerLaps
                    noHeader
                    laps={laps}
                    showOnlyLastLap
                  />
                )}
              </Timer>

              {!expanded && <ChronometerLaps laps={laps} />}
            </>
          )}
        </Toggleable>
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

  reset = () => {
    this.props.reset();
    this.props.removeLaps();
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
