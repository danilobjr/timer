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
  FlexSpace,
  Toaster,
} from 'components';
import { State } from 'src/redux';

const initialState = {
  name: 'Timer',
  hours: 0,
  minutes: 0,
  seconds: 0,
};

type NewCountdownPageState = Readonly<typeof initialState>;
type NewCountdownPageProps = StateToProps & DispatchToProps & WithRouterProps;

// TODO: save button should be always enabled. When no time set, show a message: Please, set a time first.

class NewCountdownPage extends Component<NewCountdownPageProps, NewCountdownPageState> {
  readonly state: NewCountdownPageState = initialState;

  render() {
    const { toasts } = this.props;
    const { name, hours, minutes, seconds } = this.state;

    return (
      <>
        <PageContent className="new-countdown">
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

          {/* TODO: extract this to its own component */}
          <div className="toasters">
            {toasts.map(({ id, message, show }) => (
              <Toaster
                key={id}
                show={show}
                onClickClose={this.hideToast(id)}
              >
                {message}
              </Toaster>
            ))}
          </div>
        </PageContent>

        <CommandBar>
          <CommandBarButton
            icon="arrowLeft"
            title="Back"
            onClick={this.backToCountdownsPage}
          />

          <FlexSpace />

          <CommandBarButton
            icon="floppy"
            title="Save"
            onClick={this.create}
          />
        </CommandBar>
      </>
    );
  }

  private updateTime = (time: Partial<NewCountdownPageState>) => this.setState({ ...this.state, ...time });
  private updateName = (name: string) => this.setState({ ...this.state, name });
  private backToCountdownsPage = () => this.props.navigateToRoute('/countdowns');
  private hideToast = (toastId: string) => () => this.props.hideToast(toastId);

  // TODO: move this to redux?
  private create = () => {
    const { name, hours, minutes, seconds } = this.state;
    const milliseconds = toMilliseconds(hours, minutes, seconds);

    if (milliseconds === 0) {
      this.props.showMessage('You need to set a valid time');
      return;
    }

    const countdown: Countdown = {
      id: uuid(),
      name,
      milliseconds,
      startAt: milliseconds,
      paused: true,
    };

    this.props.create(countdown);
    this.props.navigateToRoute('/countdowns');
  }
}

const actions = {
  ...newCountdownActions,
  ...globalActions,
};

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: State) => ({ toasts: state.toasts });
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCountdownPage));
