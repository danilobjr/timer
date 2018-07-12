import * as React from 'react';
import { SFC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContent } from 'components/common';
import { CountdownsPageCommandBar, CountdownGrid } from 'components/pages/countdowns';
import { State } from 'src/redux';
import { CountdownsState, actions } from 'src/redux/modules/countdowns';

type CountdownsPageProps = StateToProps & DispatchToProps;

// TODO: fix 'edit' and 'exit edit (check)' icons
// TODO: fix fullscreen height (gap on top)
// TODO: make timers work

const CountdownsPage: SFC<CountdownsPageProps> = (props) => {
  const { isEdition, countdowns, toggleEdition, removeCountdown } = props;
  const noTimers = !countdowns || !countdowns.length;

  return (
    <PageContent className="-countdowns">
      {noTimers ? (
        <p className="no-countdowns-text">Click + to add a countdown</p>
      ) : (
          <CountdownGrid
            isEdition={isEdition}
            countdowns={countdowns}
            onClickPause={console.log}
            onClickRemove={removeCountdown}
            onClickReset={console.log}
            onClickStart={console.log}
            onClickToggleExpand={console.log}
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
