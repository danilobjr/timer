import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ChronometerResults, Timer, TimerButton, PageContent } from 'components';
import { State } from 'src/redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actions } from 'src/redux/modules/chronometer';

const initialState = {
  isLapsButtonHidden: true,
  isResetButtonHidden: true,
};

type ChronometerPageProps = StateToProps & DispatchToProps;
type ChronometerPageState = Readonly<typeof initialState>;

export class ChronometerPage extends Component<ChronometerPageProps, ChronometerPageState> {
  // private timer: any = null;
  readonly state: ChronometerPageState = initialState;

  // componentDidUpdate() {
  //   this.timer = (this.refs.timer as any).getWrappedInstance();
  // }

  render() {
    const { chronometer, laps, start, stop } = this.props;
    const { isResetButtonHidden, isLapsButtonHidden } = this.state;

    return (
      <PageContent className="-chronometer">
        <Timer
          // ref="timer"
          showHundredths
          time={chronometer}
          onClickStart={start}
          onClickPause={stop}
        // onClickReset={this.hideResetButton}
        >
          <TimerButton
            icon="reset"
            title="Reset"
            hideButton={isResetButtonHidden}
            onClick={console.log}
          />

          <TimerButton
            icon="flag"
            title="Laps"
            hideButton={isLapsButtonHidden}
            onClick={console.log}
          />
        </Timer>

        <ChronometerResults results={laps} />
      </PageContent>
    );
  }

  // handleClickStart = () => this.setState({
  //   isResetButtonHidden: true,
  //   isLapsButtonHidden: false,
  // });

  // handleClickPause = () => this.setState({
  //   isResetButtonHidden: false,
  //   isLapsButtonHidden: true,
  // });

  // restartChronometer = () => {
  //   // this.timer.reset();

  //   const updatedState = {
  //     ...this.state,
  //     results: [] as number[],
  //   };

  //   this.setState(updatedState);
  // }

  hideResetButton() {
    this.setState({ isResetButtonHidden: true });
  }

  // registerLapTime() {
  //   const { results } = this.state;

  //   const updatedState = {
  //     ...this.state,
  //     ...{ results: [...results, 3000] },
  //   };

  //   this.setState(updatedState);
  // }
}

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = ({ chronometer, laps }: State) => ({
  chronometer,
  laps,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChronometerPage);
