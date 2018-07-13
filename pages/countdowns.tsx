import * as React from 'react';
import { SFC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContent } from 'components/common';
import { CountdownsPageCommandBar, CountdownGrid } from 'components/pages/countdowns';
import { State } from 'src/redux';
import { CountdownsState, actions } from 'src/redux/modules/countdowns';

type CountdownsPageProps = StateToProps & DispatchToProps;

// TODO: set page/tab Title (in redux-saga or in _app using Helmet?)
// TODO: set theme in <head> when expanded
const CountdownsPage: SFC<CountdownsPageProps> = (props) => {
  const {
    countdowns,
    isEdition,
    pause,
    remove,
    reset,
    start,
    toggleEdition,
    toggleExpand,
  } = props;
  const noTimers = !countdowns || !countdowns.length;

  return (
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
            onClickToggleExpand={toggleExpand}
          />
        )}

      <CountdownsPageCommandBar
        isEdition={isEdition}
        hideEditButton={noTimers}
        onClickEdit={toggleEdition}
        onClickDone={toggleEdition}
      />
    </PageContent>
  );
};

type StateToProps = CountdownsState;
type DispatchToProps = typeof actions;

const mapStateToProps = (state: State) => ({ ...state.countdowns } as CountdownsState);
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CountdownsPage);
