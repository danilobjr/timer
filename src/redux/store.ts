import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { chronometerSagas } from 'src/redux/modules/chronometer';
import { countdownsSagas } from 'src/redux/modules/countdowns';
import { globalSagas } from 'src/redux/modules/global';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

// TODO: create a rootSaga

sagaMiddleware.run(chronometerSagas);
sagaMiddleware.run(countdownsSagas);
sagaMiddleware.run(globalSagas);
