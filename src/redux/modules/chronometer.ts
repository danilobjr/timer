import { createAction, createReducer, Action } from 'redux-act';
import { Chronometer } from 'models';
import { fork, take, call, cancel, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { State } from 'src/redux';
import { Lap } from 'src/redux/models';
import { createActionDescription, hasSameActionType } from 'src/redux/utils';

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

    if (hasSameActionType(action, actions.start)) {
      task = yield fork(chronometerInterval);
    }

    if (hasSameActionType(action, actions.stop)) {
      yield cancel(task);
    }
  }
}

export const chronometerSagas = [
  fork(chronometerFlow),
];
