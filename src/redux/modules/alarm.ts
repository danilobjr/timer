import { createAction, createReducer } from 'redux-act';
import { createActionDescription } from 'src/redux/utils';
import { take, call, fork } from 'redux-saga/effects';
import { audioWrapper } from 'utils';

// ACTIONS

const createDescription = createActionDescription('alarm');

export const actions = {
  playAlarm: createAction(createDescription('PLAY')),
  stopAlarm: createAction(createDescription('STOP')),
};

// STATE

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

// SAGAS

function* alarmFlow() {
  const alarm = audioWrapper('/static/alarm.mp3');

  while (true) {
    yield take(actions.playAlarm);
    yield call(alarm.play);
    yield take(actions.stopAlarm);
    yield call(alarm.stop);
  }
}

export const alarmSagas = [
  fork(alarmFlow),
];
