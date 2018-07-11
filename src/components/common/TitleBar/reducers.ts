import { ENABLE_BACK_BUTTON, DISABLE_BACK_BUTTON, SET_BACK_BUTTON_CALLBACK } from './actions';

export const backButtonEnabled = (state = false, action: any) => {
  switch (action.type) {
    case ENABLE_BACK_BUTTON:
      return true;
    case DISABLE_BACK_BUTTON:
      return false;
    default:
      return state;
  }
}

export const backButtonCallback = (state = () => false, action: any) => {
  switch (action.type) {
    case SET_BACK_BUTTON_CALLBACK:
      return action.callback;
    default:
      return state;
  }
}
