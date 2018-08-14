import { combineReducers } from 'redux';
import alarm from './modules/alarm';
import chronometer from './modules/chronometer';
import countdowns from './modules/countdowns';
import toast from './modules/toast';

export const rootReducer = combineReducers({
  ...alarm,
  ...chronometer,
  ...countdowns,
  ...toast,
});
