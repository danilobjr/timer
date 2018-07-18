import { createActionDescription } from 'src/redux/utils';
import { createAction, createReducer, Action } from 'redux-act';
import { Chronometer } from 'models';
import { fork, take, call, cancel, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { State } from 'src/redux';
import { Lap } from 'src/redux/models';

const actionDescription = createActionDescription('chronometer');

// ACTIONS

export const actions = {
  registerLap: createAction<Lap>(actionDescription('REGISTER_LAP')),
  removeLaps: createAction(actionDescription('REMOVE_LAPS')),
  reset: createAction(actionDescription('RESET')),
  start: createAction(actionDescription('START')),
  stop: createAction(actionDescription('STOP')),
  update: createAction<Partial<Chronometer>>(actionDescription('UPDATE')),
};

// STATE

const initialState = {
  chronometer: {
    milliseconds: 0,
    paused: true,
  } as Chronometer,
  laps: [] as number[],
};

export type ChronometerState = typeof initialState;

const chronometer = createReducer({}, initialState.chronometer)
  .on(actions.reset, (chronometer, _) => ({ ...chronometer, milliseconds: 0 }))
  .on(actions.start, (chronometer, _) => ({ ...chronometer, paused: false }))
  .on(actions.stop, (chronometer, _) => ({ ...chronometer, paused: true }))
  .on(actions.update, (originalChronometer, updatedChronometerProps) => ({
    ...originalChronometer,
    ...updatedChronometerProps,
  }));

const laps = createReducer({}, initialState.laps)
  .on(actions.registerLap, (laps, newLap) => [...laps, newLap])
  .on(actions.removeLaps, () => []);

export default {
  chronometer,
  laps,
};

// SAGAS

function* chronometerInterval() {
  const interval = 10;

  while (true) {
    yield call(delay, interval);

    const chronometer: Chronometer = yield select((state: State) => state.chronometer);

    yield put(actions.update({
      milliseconds: chronometer.milliseconds + interval,
    }));
  }
}

function* chronometerFlow() {
  let task = null;

  while (true) {
    const action: Action<void> = yield take([
      actions.start,
      actions.stop,
    ]);

    // TODO: refactor this IF condition
    if (action.type.includes(actions.start.getType())) {
      task = yield fork(chronometerInterval);
    }

    if (action.type.includes(actions.stop.getType())) {
      yield cancel(task);
    }
  }
}

export function* chronometerSagas() {
  yield fork(chronometerFlow);
}
