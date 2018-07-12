import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, TabContent, Timer, TimerButton } from 'components';
import { ChronometerResults } from './ChronometerResults';

interface ChronometerTabComponentProps {
  isLightThemeOn: boolean;
}

interface ChronometerTabComponentState {
  isLapsButtonHidden: boolean;
  isResetButtonHidden: boolean;
  results: number[];
}

class ChronometerTabComponent extends Component<ChronometerTabComponentProps, ChronometerTabComponentState> {
  private timer: any = null;

  constructor(props: ChronometerTabComponentProps) {
    super(props);

    this.state = {
      isResetButtonHidden: true,
      isLapsButtonHidden: true,
      results: []
    };

    // this.timer = null;
  }

  componentDidUpdate() {
    this.timer = (this.refs.timer as any).getWrappedInstance();
  }

  render() {
    const { isLightThemeOn } = this.props;
    const { isResetButtonHidden, isLapsButtonHidden, results } = this.state;

    return (
      <Tab className="chronometer-tab">
        <TabContent>
          <Timer
            ref="timer"
            showHundredths
            onStartCounting={this.handleTimerStart.bind(this)}
            onClickPause={this.handleTimerPause.bind(this)}
            onReset={this.hideResetButton.bind(this)}
          >
            <TimerButton
              icon="reset"
              title="Reset"
              hideButton={isResetButtonHidden}
              lightTheme={isLightThemeOn}
              onClick={this.restartChronometer.bind(this)}
            />
            <TimerButton
              icon="flag"
              title="Laps"
              hideButton={isLapsButtonHidden}
              lightTheme={isLightThemeOn}
              onClick={this.registerLapTime.bind(this)}
            />
          </Timer>
          <ChronometerResults results={results} />
        </TabContent>
      </Tab>
    );
  }

  handleTimerStart() {
    this.setState({
      isResetButtonHidden: true,
      isLapsButtonHidden: false,
    });
  }

  handleTimerPause() {
    this.setState({
      isResetButtonHidden: false,
      isLapsButtonHidden: true
    });
  }

  restartChronometer() {
    this.timer.reset();

    const newState = Object.assign({},
      this.state,
      { results: [] }
    );

    this.setState(newState);
  }

  hideResetButton() {
    this.setState({ isResetButtonHidden: true });
  }

  registerLapTime() {
    const { results } = this.state;
    const newState = Object.assign({},
      this.state,
      { results: [...results, this.timer.getCurrentTime()] }
    );

    this.setState(newState);
  }
}

const mapStateToProps = (state: any) => ({
  isLightThemeOn: state.isLightThemeOn
})

export const ChronometerTab = connect(mapStateToProps)(ChronometerTabComponent);
