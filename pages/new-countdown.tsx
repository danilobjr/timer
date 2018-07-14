import * as React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as newCountdownActions } from 'src/redux/modules/countdowns';
import { actions as globalActions } from 'src/redux/modules/global';
import { compose, omit, values, all, equals, toMilliseconds } from 'utils';
import { Countdown } from 'models';
import { v1 as uuid } from 'uuid';
import {
  CommandBar,
  CommandBarButton,
  PageHeader,
  PageContent,
  FieldText,
  TimeSelector,
} from 'components/common';

const initialState = {
  name: 'Timer',
  hours: 0,
  minutes: 0,
  seconds: 0,
};

type NewCountdownPageState = Readonly<typeof initialState>;
type NewCountdownPageProps = DispatchToProps & WithRouterProps;

// TODO: save button should be always enabled. When no time set, show a message: Please, set a time first.

class NewCountdownPage extends Component<NewCountdownPageProps, NewCountdownPageState> {
  readonly state: NewCountdownPageState = initialState;

  render() {
    const { name, hours, minutes, seconds } = this.state;

    return (
      <>
        <PageContent>
          <PageHeader>New Countdown</PageHeader>

          <div className="field">
            <TimeSelector
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              onChange={this.updateTime}
            />
          </div>

          <FieldText
            label="Timer name"
            value={name}
            onChange={this.updateName}
          />
        </PageContent>

        <CommandBar>
          <CommandBarButton
            icon="floppy"
            title="Save"
            disabled={this.isTimeNotSet(this.state)}
            onClick={this.create}
          />
        </CommandBar>
      </>
    );
  }

  private updateTime = (time: Partial<NewCountdownPageState>) => this.setState({ ...this.state, ...time });
  private updateName = (name: string) => this.setState({ ...this.state, name });
  // tslint:disable-next-line:typedef
  private isTimeNotSet = compose(all(equals(0)), values, omit(['name']));

  private create = () => {
    const { name, hours, minutes, seconds } = this.state;
    const milliseconds = toMilliseconds(hours, minutes, seconds);

    // TODO: change uuid package to nanoid
    const countdown: Countdown = {
      id: uuid(),
      name,
      milliseconds,
      startAt: milliseconds,
      paused: true,
      expanded: false,
    };

    this.props.create(countdown);
    this.props.navigateToRoute('/countdowns');
  }
}

const actions = {
  ...newCountdownActions,
  ...globalActions,
};

// TODO: maybe Pick is not a good practice
type DispatchToProps = Pick<typeof actions, 'create' | 'navigateToRoute'>;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(NewCountdownPage));
