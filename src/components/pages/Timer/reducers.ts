import * as uuid from 'uuid';
import { CREATE_TIMER, REMOVE_TIMER } from './actions';

export const timers = (state: any[] = [], action: any) => {
  switch (action.type) {
    case CREATE_TIMER: {
      const { timer } = action;
      timer.id = uuid.v4();
      return [...state, timer];
    }
    case REMOVE_TIMER: {
      const timer = state.find(timer => timer.id === action.id);
      const index = state.indexOf(timer);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
