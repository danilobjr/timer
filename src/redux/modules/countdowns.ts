import { call, fork, take, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { createAction, createReducer, Action } from 'redux-act';
import { Countdown } from 'models';
import { combineReducers } from 'redux';
import { remove, StringKeyValuePair } from 'helpers';

const actionType = (name: string) => `timers/${name}`;

type CountdownId = Countdown['id'];

// ACTIONS

export const actions = {
  // TODO: rename these to only create/remove/start ... so on
  createCountdown: createAction<Countdown>(actionType('CREATE')),
  removeCountdown: createAction<CountdownId>(actionType('REMOVE')),
  start: createAction<CountdownId>(actionType('START')),
  pause: createAction<CountdownId>(actionType('STOP')),
  toggleEdition: createAction(actionType('TOGGLE_EDITION')),
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
      milliseconds: 1000,
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
  .on(actions.createCountdown, (state, payload) => [...state, payload])
  .on(actions.removeCountdown, (timers, id) => {
    const timerToRemove = timers.find(timer => timer.id === id);
    return remove(timerToRemove)(timers);
  });

export default combineReducers({
  isEdition,
  countdowns,
});

// SAGAS

function* startCountdown(countdownId: CountdownId) {
  while (true) {
    yield call(delay, 1000);
    console.log('counting', countdownId);
  }
}

function* countdownFlow() {
  const tasks: StringKeyValuePair = {};

  while (true) {
    const action = yield take([actions.start, actions.pause]);
    const { payload, type } = action;
    const countdownId = payload;

    if (type.includes('START')) {
      if (!tasks[countdownId]) {
        tasks[countdownId] = yield fork(startCountdown, countdownId);
      }
    }

    if (type.includes('STOP')) {
      yield cancel(tasks[countdownId]);
    }
  }
}

export function* countdownsSagas() {
  yield fork(countdownFlow);
}
