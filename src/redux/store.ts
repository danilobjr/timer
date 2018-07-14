import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { countdownsSagas } from 'src/redux/modules/countdowns';
import { globalSagas } from 'src/redux/modules/global';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(countdownsSagas);
sagaMiddleware.run(globalSagas);
