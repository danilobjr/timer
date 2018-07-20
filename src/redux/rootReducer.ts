import { combineReducers } from 'redux';
import chronometer from './modules/chronometer';
import countdowns from './modules/countdowns';
import global from './modules/global';

export const rootReducer = combineReducers({
  ...chronometer,
  ...countdowns,
  ...global,
});
