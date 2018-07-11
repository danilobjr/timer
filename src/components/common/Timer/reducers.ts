import { TURN_ON_LIGHT_THEME, TURN_OFF_LIGHT_THEME } from './actions';

export const isLightThemeOn = (state = false, action: any) => {
  switch (action.type) {
    case TURN_ON_LIGHT_THEME:
      return true;
    case TURN_OFF_LIGHT_THEME:
      return false;
    default:
      return state;
  }
}
