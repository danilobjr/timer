import { SET_WINDOW_IS_MAXIMIZED, SET_WINDOW_IS_NOT_MAXIMIZED } from './actions';

export const windowIsMaximized = (state = false, action: any) => {
  switch (action.type) {
    case SET_WINDOW_IS_MAXIMIZED:
      return true;
    case SET_WINDOW_IS_NOT_MAXIMIZED:
      return false;
    default:
      return state;
  }
}
