import { combineReducers } from 'redux';
import countdowns from './modules/countdowns';

export const rootReducer = combineReducers({
  ...countdowns,
});
