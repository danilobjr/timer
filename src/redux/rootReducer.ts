import { combineReducers } from 'redux';
import chronometer from './modules/chronometer';
import countdowns from './modules/countdowns';
import toast from './modules/toast';

export const rootReducer = combineReducers({
  ...chronometer,
  ...countdowns,
  ...toast,
});
