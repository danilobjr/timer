import * as React from 'react';
import { Component, Fragment } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FlexBox, TabContent } from 'components/common';
import { CountdownTimer, TimersPageCommandBar } from 'components/pages/timer';
import { milliseconds, StringKeyValuePair } from 'helpers';
import { State } from 'src/redux';
import { TimerState, actions } from 'src/redux/modules/timer';

type TimerPageProps = StateToProps & DispatchToProps;

type TimerTabComponentState = {
  isEdition: boolean;
};

// TODO: move this page to pages/timer.tsx file and try to redirect to it from index.tsx

class TimerPage extends Component<TimerPageProps, TimerTabComponentState> {
  constructor(props: TimerPageProps) {
    super(props);

    this.state = {
      isEdition: false,
    };
  }

  // TODO: remove this?
  componentWillReceiveProps(nextProps: TimerPageProps) {
    if (nextProps.timers.length === 0 && this.state.isEdition) {
      this.setState({ isEdition: false });
    }
  }

  render() {
    const { timers } = this.props;
    const noTimers = !timers || !timers.length;

    return (
      <Fragment>
        {noTimers ? (
          <p className="timers__no-timers-text">Click + to add a timer</p>
        ) : (
            <TabContent>
              {/* TODO: move this style to SASS */}
              <FlexBox wrap justify="center">
                {this.renderCountdownTimers()}
              </FlexBox>
            </TabContent>
          )}

        <TimersPageCommandBar
          isEdition={this.state.isEdition}
          hideEditButton={noTimers}
          onClickEdit={this.enableEdition}
          onClickDone={this.disableEdition}
        />
      </Fragment>
    );
  }

  renderCountdownTimers() {
    return this.props.timers.map((timer: StringKeyValuePair) => {
      const { id, name, hours, minutes, seconds } = timer;

      return (
        <CountdownTimer
          key={id}
          name={name}
          time={milliseconds(hours, minutes, seconds)}
          isEditionModeEnabled={this.state.isEdition}
          onClickRemoveButton={this.removeTimer(id)}
        />
      );
    });
  }

  private enableEdition = () => this.setState({ isEdition: true });
  private disableEdition = () => this.setState({ isEdition: false });
  private removeTimer = (id: string) => () => this.props.removeTimer(id);
}

type StateToProps = TimerState;
type DispatchToProps = typeof actions;

const mapStateToProps = (state: State) => ({ ...state.timer } as TimerState);
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
