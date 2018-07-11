import { combineReducers } from 'redux';
import timer from './modules/timer';

export const rootReducer = combineReducers({
  timer,
});
