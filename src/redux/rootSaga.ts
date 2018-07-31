import { all } from 'redux-saga/effects';
import { chronometerSagas } from 'src/redux/modules/chronometer';
import { countdownsSagas } from 'src/redux/modules/countdowns';
import { globalSagas } from 'src/redux/modules/global';

export function* rootSaga() {
  yield all([
    ...chronometerSagas,
    ...countdownsSagas,
    ...globalSagas,
  ]);
}
