import { all, fork } from 'redux-saga/effects';
import { chronometerSagas } from 'src/redux/modules/chronometer';
import { countdownsSagas } from 'src/redux/modules/countdowns';
import { globalSagas } from 'src/redux/modules/global';

export function* rootSaga() {
  yield all([
    fork(chronometerSagas),
    fork(countdownsSagas),
    fork(globalSagas),
  ]);
}
