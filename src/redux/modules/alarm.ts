import { createAction, createReducer } from 'redux-act';
import { createActionDescription } from 'src/redux/utils';

// ACTIONS

const createDescription = createActionDescription('alarm');

export const actions = {
  playAlarm: createAction(createDescription('PLAY')),
  stopAlarm: createAction(createDescription('STOP')),
};

// INITIAL STATE

const initialState = {
  alarmStopped: true,
};

export type AlarmState = typeof initialState;

// REDUCERS

const alarmStopped = createReducer({}, initialState.alarmStopped)
  .on(actions.playAlarm, () => false)
  .on(actions.stopAlarm, () => true);

export default {
  alarmStopped,
};
