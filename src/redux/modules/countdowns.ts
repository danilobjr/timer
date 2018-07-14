import { call, fork, take, cancel, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { createAction, createReducer } from 'redux-act';
import { Countdown, TimeInMilliseconds } from 'models';
import { combineReducers } from 'redux';
import { remove, StringKeyValuePair, updateAt } from 'helpers';
import { State } from 'src/redux/State';
import { CountdownId } from 'src/redux/models';
import { createActionDescription } from '../utils';

// TODO: save redux state to localStorage

// ACTIONS

const actionDescription = createActionDescription('countdowns');

// TODO: segregate these actions. Some are to use in component other just internally in this module
export const actions = {
  create: createAction<Countdown>(actionDescription('CREATE')),
  pause: createAction<CountdownId>(actionDescription('PAUSE')),
  remove: createAction<CountdownId>(actionDescription('REMOVE')),
  reset: createAction<CountdownId>(actionDescription('RESET')),
  start: createAction<CountdownId>(actionDescription('START')),
  toggleEdition: createAction(actionDescription('TOGGLE_EDITION')),
  toggleExpand: createAction<CountdownId>(actionDescription('TOGGLE_EXPAND')),
  update: createAction<CountdownId, Partial<Countdown>, Countdown>(
    actionDescription('UPDATE_COUNTDOWN'),
    (id: CountdownId, updatedProps: Countdown) => ({ id, ...updatedProps }),
  ),
};

// STATE

const initialState = {
  countdowns: [] as Countdown[],
  isEdition: false,
};

export type CountdownsState = typeof initialState;

// REDUCERS

const isEdition = createReducer({}, initialState.isEdition)
  .on(actions.toggleEdition, isEdition => !isEdition);

const countdowns = createReducer({}, initialState.countdowns)
  .on(actions.create, (countdowns, newCountdown) => [...countdowns, newCountdown])
  .on(actions.remove, (countdowns, id) => {
    const countdownToRemove = countdowns.find(c => c.id === id);
    return remove(countdownToRemove)(countdowns);
  })
  .on(actions.reset, (countdowns, id) => {
    const original = countdowns.find(countdown => countdown.id === id);
    return updateCountdown(countdowns, { ...original, milliseconds: original.startAt });
  })
  .on(actions.toggleExpand, (countdowns, id) => {
    const original = countdowns.find(countdown => countdown.id === id);
    return updateCountdown(countdowns, { ...original, expanded: !original.expanded });
  })
  .on(actions.update, updateCountdown);

export default combineReducers({
  isEdition,
  countdowns,
});

// SAGAS

function* countdownInterval(id: CountdownId) {
  while (true) {
    const countdowns: Countdown[] = yield select((state: State) => state.countdowns.countdowns);
    const foundCountdown = countdowns.find(c => c.id === id);

    if (foundCountdown.milliseconds === 0) {
      yield put(actions.pause(id));
    }

    yield put(actions.update(id, { paused: false }));

    yield call(delay, 1000);

    yield put(actions.update(id, {
      milliseconds: foundCountdown.milliseconds - TimeInMilliseconds.Second,
    }));
  }
}

function* countdownFlow() {
  const tasks: StringKeyValuePair = {};

  while (true) {
    const action = yield take([
      actions.start,
      actions.pause,
      actions.reset,
      actions.remove,
    ]);

    const { payload, type } = action;
    const countdownId = payload;

    if (type.includes('START')) {
      tasks[countdownId] = yield fork(countdownInterval, countdownId);
    }

    if (type.includes('PAUSE')) {
      yield cancel(tasks[countdownId]);
      yield put(actions.update(countdownId, { paused: true }));
    }

    if (type.includes('RESET')) {
      yield cancel(tasks[countdownId]);

      const countdown: Countdown = yield select(({ countdowns }: State) =>
        countdowns.countdowns.find(c => c.id === countdownId),
      );

      if (!countdown.paused) {
        tasks[countdownId] = yield fork(countdownInterval, countdownId);
      }
    }

    if (type.includes('REMOVE')) {
      if (tasks[countdownId]) {
        yield cancel(tasks[countdownId]);
      }

      yield put(actions.remove(countdownId));

      const countdowns = yield select(({ countdowns }: State) => countdowns.countdowns);

      if (countdowns.length === 0) {
        yield put(actions.toggleEdition());
      }
    }
  }
}

export function* countdownsSagas() {
  yield fork(countdownFlow);
}

// UTILS

function updateCountdown(originalCountdowns: Countdown[], countdownWithIdToUpdate: Countdown) {
  const original = originalCountdowns.find(c => c.id === countdownWithIdToUpdate.id);
  const index = originalCountdowns.findIndex(c => c.id === countdownWithIdToUpdate.id);

  const updated = {
    ...original,
    ...countdownWithIdToUpdate,
  };

  return updateAt<Countdown>(index)(updated)(originalCountdowns);
}
