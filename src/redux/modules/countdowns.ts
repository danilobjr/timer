import { createAction, createReducer } from 'redux-act';
import { Countdown } from 'models';
import { combineReducers } from 'redux';
import { remove } from 'helpers';

const actionType = (name: string) => `timers/${name}`;

// ACTIONS

export const actions = {
  createCountdown: createAction<Countdown>(actionType('CREATE')),
  removeCountdown: createAction<string>(actionType('REMOVE')),
  toggleEdition: createAction(actionType('TOGGLE_EDITION')),
};

// STATE

const initialState = {
  countdowns: [
    {
      id: '13231231323123123',
      name: 'Break',
      time: 1980000,
      startTime: 1980000,
    },
    {
      id: '3543534534534534',
      name: 'Lunch',
      time: 3600000,
      startTime: 3600000,
    },
    {
      id: '75675656765756756',
      name: 'Stop',
      time: 1000,
      startTime: 3000,
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
