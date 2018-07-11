import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  CommandBar, CommandBarItem, 
  // NavigationBar,
  PageView, PageHeader, PageContent,
  FieldText, TimeSelector
} from 'components/common';
import { compose, omit, values, all, equals, not } from 'helpers';
import { createTimer } from './actions';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';

interface TimerNewPageComponentInternalProps {
  createTimer: (data: any) => void;
  enableBackButton: () => void;
  disableBackButton: () => void;
  setBackButtonCallback: (callback: Function) => void;
}

interface TimerNewPageComponentState {
  name: string;
  hours: number;
  minutes: number;
  seconds: number;
}

class TimerNewPageComponent extends Component<any, TimerNewPageComponentState> {
  constructor(props: TimerNewPageComponentInternalProps) {
    super(props);

    this.state = {
      name: 'Timer',
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    const { enableBackButton, setBackButtonCallback, history } = this.props;

    enableBackButton();
    setBackButtonCallback(() => history.goBack());
  }

  componentWillUnmount() {
    this.props.disableBackButton();
  }

  render() {
    const { name, hours, minutes, seconds } = this.state;

    return (
      <PageView className="timer-new-page">
        <PageContent grow={1}>
          <PageHeader>New Timer</PageHeader>

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
        </PageContent>
        <CommandBar>
          <CommandBarItem
            icon="floppy"
            title="Save"
            disabled={!this.isTimeSet()}
            onClick={this.createNewTimer.bind(this)}
          />
          <CommandBarItem icon="moreHorizontal" title="More" />
        </CommandBar>
      </PageView>
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
      omit(['name'])
    )(this.state);
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  createTimer: (data: any) => dispatch(createTimer(data)),
  enableBackButton: () => dispatch(enableBackButton()),
  disableBackButton: () => dispatch(disableBackButton()),
  setBackButtonCallback: (callback: Function) => dispatch(setBackButtonCallback(callback))
})

export const TimerNewPage = connect(null, mapDispatchToProps)(TimerNewPageComponent);
