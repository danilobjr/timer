import * as React from 'react';
import { SFC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContent } from 'components/common';
import { TimerPageCommandBar, TimerGrid } from 'components/pages/timer';
import { State } from 'src/redux';
import { TimerState, actions } from 'src/redux/modules/timer';

type TimerPageProps = StateToProps & DispatchToProps;

// TODO: move this page to pages/timer.tsx file and try to redirect to it from index.tsx
// TODO: fix numbers pad in timers to 00:00:00 format
// TODO: fix 'edit' and 'exit edit (check)' icons
// TODO: fix fullscreen height (gap on top)
// TODO: make timers work

const TimerPage: SFC<TimerPageProps> = (props) => {
  const { isEdition, timers, toggleEdition, removeTimer } = props;
  const noTimers = !timers || !timers.length;

  return (
    <PageContent className="-timer">
      {noTimers ? (
        <p className="no-timers-text">Click + to add a timer</p>
      ) : (
          <TimerGrid
            isEdition={isEdition}
            timers={timers}
            onClickRemove={removeTimer}
          />
        )}

      <TimerPageCommandBar
        isEdition={isEdition}
        hideEditButton={noTimers}
        onClickEdit={toggleEdition}
        onClickDone={toggleEdition}
      />
    </PageContent>
  );
};

type StateToProps = TimerState;
type DispatchToProps = typeof actions;

const mapStateToProps = (state: State) => ({ ...state.timer } as TimerState);
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
