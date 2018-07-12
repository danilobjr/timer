import * as React from 'react';
import { SFC } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { PageContent } from 'components/common';
import { CountdownTimer, TimersPageCommandBar } from 'components/pages/timer';
import { milliseconds, StringKeyValuePair } from 'helpers';
import { State } from 'src/redux';
import { TimerState, actions } from 'src/redux/modules/timer';

type TimerPageProps = StateToProps & DispatchToProps;

// TODO: move this page to pages/timer.tsx file and try to redirect to it from index.tsx

const TimerPage: SFC<TimerPageProps> = (props) => {
  const { isEdition, timers, toggleEdition } = props;
  const noTimers = !timers || !timers.length;

  return (
    <PageContent className="-timer">
      {noTimers ? (
        <p className="no-timers-text">Click + to add a timer</p>
      ) : (
          // TODO: extract this to its own file
          <div className="timers-grid">
            {renderCountdownTimers(props)}
          </div>
        )}

      <TimersPageCommandBar
        isEdition={isEdition}
        hideEditButton={noTimers}
        onClickEdit={toggleEdition}
        onClickDone={toggleEdition}
      />
    </PageContent>
  );
};

const renderCountdownTimers = ({ isEdition, timers, removeTimer }: TimerPageProps) => {
  const remove = (id: string) => () => removeTimer(id);

  return timers.map((timer: StringKeyValuePair) => {
    const { id, name, hours, minutes, seconds } = timer;

    return (
      <CountdownTimer
        key={id}
        name={name}
        time={milliseconds(hours, minutes, seconds)}
        isEditionModeEnabled={isEdition}
        onClickRemoveButton={remove(id)}
      />
    );
  });
};

type StateToProps = TimerState;
type DispatchToProps = typeof actions;

const mapStateToProps = (state: State) => ({ ...state.timer } as TimerState);
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
