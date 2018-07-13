import { call, fork, take, cancel, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { createAction, createReducer } from 'redux-act';
import { Countdown, TimeInMilliseconds } from 'models';
import { combineReducers } from 'redux';
import { remove, StringKeyValuePair, updateAt } from 'helpers';
import { State } from 'src/redux/State';

type CountdownId = Countdown['id'];

// ACTIONS

const actionType = (name: string) => `countdowns/${name}`;

export const actions = {
  create: createAction<Countdown>(actionType('CREATE')),
  remove: createAction<CountdownId>(actionType('REMOVE')),
  update: createAction<CountdownId, Partial<Countdown>, Countdown>(
    actionType('UPDATE_COUNTDOWN'),
    (id: CountdownId, updatedProps: Countdown) => ({ id, ...updatedProps }),
  ),
  start: createAction<CountdownId>(actionType('START')),
  pause: createAction<CountdownId>(actionType('PAUSE')),
  toggleEdition: createAction(actionType('TOGGLE_EDITION')),
  toggleExpand: createAction<CountdownId>(actionType('TOGGLE_EXPAND')),
};

// STATE

const initialState = {
  countdowns: [
    {
      id: '13231231323123123',
      name: 'Break',
      startAt: 1980000,
      milliseconds: 1980000,
      expanded: false,
      paused: true,
    },
    {
      id: '3543534534534534',
      name: 'Lunch',
      startAt: 3600000,
      milliseconds: 3600000,
      expanded: false,
      paused: true,
    },
    {
      id: '75675656765756756',
      name: 'Stop',
      startAt: 3000,
      milliseconds: 3000,
      expanded: false,
      paused: true,
    },
  ] as Countdown[],
  isEdition: false,
};

export type CountdownsState = typeof initialState;

// REDUCERS

const isEdition = createReducer({}, initialState.isEdition)
  .on(actions.toggleEdition, state => !state);

const countdowns = createReducer({}, initialState.countdowns)
  .on(actions.create, (state, payload) => [...state, payload])
  .on(actions.remove, (state, payload) => {
    const countdowns = state;
    const id = payload;
    const countdownToRemove = countdowns.find(c => c.id === id);
    return remove(countdownToRemove)(countdowns);
  })
  .on(actions.update, updateCountdown)
  .on(actions.toggleExpand, (state, payload) => {
    const countdowns = state;
    const id = payload;
    const original = countdowns.find(countdown => countdown.id === id);
    return updateCountdown(state, { ...original, expanded: !original.expanded });
  });

export default combineReducers({
  isEdition,
  countdowns,
});

// SAGAS

function* startCountdown(id: CountdownId) {
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
    const action = yield take([actions.start, actions.pause]);
    const { payload, type } = action;
    const countdownId = payload;

    if (type.includes('START')) {
      tasks[countdownId] = yield fork(startCountdown, countdownId);
    }

    if (type.includes('PAUSE')) {
      yield cancel(tasks[countdownId]);
      yield put(actions.update(countdownId, { paused: true }));
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
