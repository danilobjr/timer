import { createAction, createReducer } from 'redux-act';
import { Timer } from 'models';
import { combineReducers } from 'redux';
import { remove } from 'helpers';

const actionType = (name: string) => `timers/${name}`;

// ACTIONS

export const actions = {
  createTimer: createAction<Timer>(actionType('CREATE')),
  removeTimer: createAction<string>(actionType('REMOVE')),
};

// STATE

const initialState = {
  timers: [
    {
      id: '13231231323123123',
      name: 'Break',
      seconds: 3,
    },
  ] as Timer[],
};

export type TimerState = typeof initialState;

// REDUCERS

const timers = createReducer({}, initialState.timers)
  .on(actions.createTimer, (state, payload) =>
    [...state, payload],
  )
  .on(actions.removeTimer, (timers, id) => {
    const timerToRemove = timers.find(timer => timer.id === id);
    return remove(timerToRemove)(timers);
  });

export default combineReducers({
  timers,
});
