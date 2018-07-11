import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlexBox, FlexItem, Tab, TabContent,
  CommandBar, CommandBarItem
} from 'components/common';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';
import { CountdownTimer } from './CountdownTimer';
import { TimerTabCommandBar } from './TimerTabCommandBar';
import { milliseconds, StringKeyValuePair } from 'helpers';
import { removeTimer } from './actions';

interface TimerTabComponentInternalProps {
  timers: StringKeyValuePair[];
  removeTimer: (id: number) => void;
}

interface TimerTabComponentState {
  isEditionModeEnabled: boolean;
}

class TimerTabComponent extends Component<any, TimerTabComponentState> {
  constructor(props: TimerTabComponentInternalProps) {
    super(props);

    this.state = {
      isEditionModeEnabled: false
    };
  }

  componentWillReceiveProps(nextProps: TimerTabComponentInternalProps) {
    if (nextProps.timers.length === 0 && this.state.isEditionModeEnabled) {
      this.setState({ isEditionModeEnabled: false });
    }
  }

  render() {
    const timers = this.renderCountdownTimers();

    return (
      <Tab>
        <TabContent>
          <FlexBox wrap justify='center'>
            {timers.length ? timers : <p>Click + add a timer</p>}
          </FlexBox>
        </TabContent>
        <TimerTabCommandBar
          isEditionModeEnabled={this.state.isEditionModeEnabled}
          hideEditButton={timers.length === 0}
          onClickEdit={this.enableEdition.bind(this)}
          onClickDone={this.disableEdition.bind(this)}
        />
      </Tab>
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
          onClickRemoveButton={() => this.removeTimer(id)}
        />
      )
    });
  }

  enableEdition() {
    this.setState({ isEditionModeEnabled: true });
  }

  disableEdition() {
    this.setState({ isEditionModeEnabled: false });
  }

  removeTimer(id: number) {
    this.props.removeTimer(id);
  }
}

const mapStateToProps = (state: any) => ({
  timers: state.timers
});

const mapDispatchToProps = (dispatch: any) => ({
  removeTimer: (id: number) => dispatch(removeTimer(id))
})

export const TimerTab = connect(mapStateToProps, mapDispatchToProps)(TimerTabComponent);
