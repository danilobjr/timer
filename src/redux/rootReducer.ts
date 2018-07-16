import { combineReducers } from 'redux';
import chronometer from './modules/chronometer';
import countdowns from './modules/countdowns';

export const rootReducer = combineReducers({
  ...chronometer,
  ...countdowns,
});
