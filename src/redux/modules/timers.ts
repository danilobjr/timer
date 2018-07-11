import { createAction, createReducer } from 'redux-act';
import { Timer } from 'models';
import { combineReducers } from 'redux';

const actionType = (name: string) => `timers/${name}`;

// ACTIONS

export const actions = {
  createTimer: createAction<Timer>(actionType('CREATE')),
  removeTimer: createAction<Timer>(actionType('REMOVE')),
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

export type State = typeof initialState;

// REDUCERS

const timers = createReducer({}, initialState.timers)
  .on(actions.createTimer, (state, payload) =>
    [...state, payload],
  );

export default combineReducers({
  timers,
});
