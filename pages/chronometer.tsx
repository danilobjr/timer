import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ChronometerResults, Timer, TimerButton, PageContent } from 'components';
import { Time } from 'models';

const initialState = {
  isLapsButtonHidden: true,
  isResetButtonHidden: true,
  results: [] as number[],
};

// type ChronometerPageProps = { isLightThemeOn: boolean };
type ChronometerPageState = Readonly<typeof initialState>;

export default class ChronometerTab extends Component<{}, ChronometerPageState> {
  // private timer: any = null;
  readonly state: ChronometerPageState = initialState;

  // componentDidUpdate() {
  //   this.timer = (this.refs.timer as any).getWrappedInstance();
  // }

  render() {
    // const { isLightThemeOn } = this.props;
    const { isResetButtonHidden, isLapsButtonHidden, results } = this.state;
    const time: Time = {
      id: '',
      paused: true,
      milliseconds: 0,
    };

    return (
      <PageContent className="-chronometer">
        <Timer
          // ref="timer"
          showHundredths
          time={time}
          onClickStart={this.handleClickStart}
          onClickPause={this.handleClickPause}
        // onClickReset={this.hideResetButton}
        >
          <TimerButton
            icon="reset"
            title="Reset"
            hideButton={isResetButtonHidden}
            onClick={this.restartChronometer.bind(this)}
          />

          <TimerButton
            icon="flag"
            title="Laps"
            hideButton={isLapsButtonHidden}
            onClick={this.registerLapTime.bind(this)}
          />
        </Timer>

        <ChronometerResults results={results} />
      </PageContent>
    );
  }

  handleClickStart = () => this.setState({
    isResetButtonHidden: true,
    isLapsButtonHidden: false,
  });

  handleClickPause = () => this.setState({
    isResetButtonHidden: false,
    isLapsButtonHidden: true,
  });

  restartChronometer = () => {
    // this.timer.reset();

    const updatedState = {
      ...this.state,
      results: [] as number[],
    };

    this.setState(updatedState);
  }

  hideResetButton() {
    this.setState({ isResetButtonHidden: true });
  }

  registerLapTime() {
    const { results } = this.state;

    const updatedState = {
      ...this.state,
      ...{ results: [...results, 3000] },
    };

    this.setState(updatedState);
  }
}

// const mapStateToProps = (state: any) => ({
//   isLightThemeOn: state.isLightThemeOn,
// });

// export default connect(mapStateToProps)(ChronometerTabComponent);
