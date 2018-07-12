import { createAction, createReducer } from 'redux-act';
import { Timer } from 'models';
import { combineReducers } from 'redux';
import { remove } from 'helpers';

const actionType = (name: string) => `timers/${name}`;

// ACTIONS

export const actions = {
  createTimer: createAction<Timer>(actionType('CREATE')),
  removeTimer: createAction<string>(actionType('REMOVE')),
  toggleEdition: createAction(actionType('TOGGLE_EDITION')),
};

// STATE

const initialState = {
  timers: [
    {
      id: '13231231323123123',
      name: 'Break',
      minutes: 33,
    },
    {
      id: '3543534534534534',
      name: 'Lunch',
      hours: 1,
    },
    {
      id: '75675656765756756',
      name: 'Stop',
      seconds: 3,
    },
  ] as Timer[],
  isEdition: false,
};

export type TimerState = typeof initialState;

// REDUCERS

const isEdition = createReducer({}, initialState.isEdition)
  .on(actions.toggleEdition, state => !state);

const timers = createReducer({}, initialState.timers)
  .on(actions.createTimer, (state, payload) => [...state, payload])
  .on(actions.removeTimer, (timers, id) => {
    const timerToRemove = timers.find(timer => timer.id === id);
    return remove(timerToRemove)(timers);
  });

export default combineReducers({
  isEdition,
  timers,
});
