import { combineReducers } from 'redux';
import timers from './modules/timers';

export const rootReducer = combineReducers({
  timers,
});
