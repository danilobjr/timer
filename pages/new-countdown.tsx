import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  CommandBar,
  CommandBarItem,
  // NavigationBar,
  Page,
  PageHeader,
  PageContent,
  FieldText,
  TimeSelector,
} from 'components/common';
import { compose, omit, values, all, equals, not } from 'helpers';
// import { createTimer } from './actions';
// import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';

type NewTimerPageInternalProps = {
  createTimer: (data: any) => void;
  enableBackButton: () => void;
  disableBackButton: () => void;
  setBackButtonCallback: (callback: Function) => void;
};

type NewTimerPageState = {
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
};

export default class NewTimerPage extends Component<any, NewTimerPageState> {
  constructor(props: NewTimerPageInternalProps) {
    super(props);

    this.state = {
      name: 'Timer',
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  render() {
    const { name, hours, minutes, seconds } = this.state;

    return (
      <PageContent className="new-countdown">
        <PageHeader>New Countdown</PageHeader>

        <div className="field">
          <TimeSelector
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            onChange={(value) => this.updateTime(value)}
          />
        </div>

        <FieldText
          label="Timer name"
          value={name}
          onChange={(value) => this.updateName(value)}
        />
        <CommandBar>
          <CommandBarItem
            icon="floppy"
            title="Save"
            disabled={!this.isTimeSet()}
            onClick={this.createNewTimer.bind(this)}
          />
          <CommandBarItem icon="moreHorizontal" title="More" />
        </CommandBar>
      </PageContent>
    );
  }

  updateTime(value: any) {
    const newState = Object.assign({}, this.state, value);
    this.setState(newState);
  }

  updateName(value: any) {
    const newState = Object.assign({}, this.state, { name: value });
    this.setState(newState);
  }

  createNewTimer() {
    this.props.createTimer(this.state);
  }

  isTimeSet() {
    return compose(
      not,
      all(equals(0)),
      values,
      omit(['name']),
    )(this.state);
  }
}

// const mapDispatchToProps = (dispatch: any) => ({
//   createTimer: (data: any) => dispatch(createTimer(data)),
//   enableBackButton: () => dispatch(enableBackButton()),
//   disableBackButton: () => dispatch(disableBackButton()),
//   setBackButtonCallback: (callback: Function) => dispatch(setBackButtonCallback(callback))
// });

// export const TimerNewPage = connect(null, mapDispatchToProps)(TimerNewPageComponent);
