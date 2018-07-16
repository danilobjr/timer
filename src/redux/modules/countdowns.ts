import { call, fork, take, cancel, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { createAction, createReducer } from 'redux-act';
import { Countdown, TimeInMilliseconds } from 'models';
import { StringKeyValuePair } from 'models';
import { remove, updateAt } from 'utils';
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
  update: createAction<CountdownId, Partial<Countdown>, Countdown>(
    actionDescription('UPDATE_COUNTDOWN'),
    (id: CountdownId, updatedProps: Countdown) => ({ id, ...updatedProps }),
  ),
};

// STATE

const initialState = {
  countdowns: [] as Countdown[],
};

export type CountdownsState = typeof initialState;

// REDUCERS

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
  .on(actions.update, updateCountdown);

// export default combineReducers({
//   countdowns,
// });
export default {
  countdowns,
};

// SAGAS

function* countdownInterval(id: CountdownId) {
  while (true) {
    const countdowns: Countdown[] = yield select((state: State) => state.countdowns);
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

    // TODO: refactor. See chronometer redux module
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
        countdowns.find(c => c.id === countdownId),
      );

      if (!countdown.paused) {
        tasks[countdownId] = yield fork(countdownInterval, countdownId);
      }
    }

    if (type.includes('REMOVE')) {
      if (tasks[countdownId]) {
        yield cancel(tasks[countdownId]);
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
