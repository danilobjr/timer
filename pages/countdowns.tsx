import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContent } from 'components/common';
import { CountdownsPageCommandBar, CountdownGrid } from 'components/pages/countdowns';
import { State } from 'src/redux';
import { CountdownsState, actions } from 'src/redux/modules/countdowns';

// TODO: get all components from 'components'; without "namespaces".

const initialState = {
  isEdition: false,
};

type CountdownsPageProps = StateToProps & DispatchToProps;
type CountdownsPageState = Readonly<typeof initialState>;

// TODO: remove all lightTheme reference from components and styles
// TODO: set page/tab Title (in redux-saga or in _app using Helmet?)
// TODO: set theme in <head> when expanded
class CountdownsPage extends Component<CountdownsPageProps, CountdownsPageState> {
  readonly state: CountdownsPageState = initialState;

  render() {
    const {
      countdowns,
      pause,
      remove,
      reset,
      start,
    } = this.props;

    const isEdition = this.isEdition();
    const noTimers = !countdowns || !countdowns.length;

    return (
      <>
        <PageContent className="-countdowns">
          {noTimers ? (
            <p className="no-countdowns-text">Click + to add a countdown</p>
          ) : (
              <CountdownGrid
                isEdition={isEdition}
                countdowns={countdowns}
                onClickPause={pause}
                onClickRemove={remove}
                onClickReset={reset}
                onClickStart={start}
              />
            )}
        </PageContent>

        <CountdownsPageCommandBar
          isEdition={isEdition}
          hideEditButton={noTimers}
          onClickEdit={this.toggleEdition}
          onClickDone={this.toggleEdition}
        />
      </>
    );
  }

  toggleEdition = () => this.setState(prevState => ({ isEdition: !prevState.isEdition }));
  isEdition = () => this.state.isEdition && this.props.countdowns.length > 0;
}

// TODO: refactor this to ReturnType<typeof mapStateToProps>
type StateToProps = CountdownsState;
// TODO: refactor this to ReturnType<typeof mapDispatchToProps>
type DispatchToProps = typeof actions;

const mapStateToProps = (state: State) => ({ ...state } as CountdownsState);
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CountdownsPage);
