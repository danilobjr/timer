import * as React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FlexBox, TabContent } from 'components/common';
import { CountdownTimer, TimersPageCommandBar } from 'components/pages/timer';
import { removeTimer } from 'components/pages/timer/actions';
import { milliseconds, StringKeyValuePair } from 'helpers';

interface TimerTabComponentInternalProps {
  timers: StringKeyValuePair[];
  removeTimer: (id: number) => void;
}

interface TimerTabComponentState {
  isEditionModeEnabled: boolean;
}

class TimersPage extends Component<any, TimerTabComponentState> {
  constructor(props: TimerTabComponentInternalProps) {
    super(props);

    this.state = {
      isEditionModeEnabled: false,
    };
  }

  // TODO: remove this?
  componentWillReceiveProps(nextProps: TimerTabComponentInternalProps) {
    if (nextProps.timers.length === 0 && this.state.isEditionModeEnabled) {
      this.setState({ isEditionModeEnabled: false });
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
          isEditionMode={this.state.isEditionModeEnabled}
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
          isEditionModeEnabled={this.state.isEditionModeEnabled}
          onClickRemoveButton={this.removeTimer(id)}
        />
      );
    });
  }

  private enableEdition = () => this.setState({ isEditionModeEnabled: true });
  private disableEdition = () => this.setState({ isEditionModeEnabled: false });
  private removeTimer = (id: number) => () => this.props.removeTimer(id);
}

const mapStateToProps = (state: any) => {
  return { ...state.timers };
};

const mapDispatchToProps = (dispatch: any) => ({
  removeTimer: (id: number) => dispatch(removeTimer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimersPage);
