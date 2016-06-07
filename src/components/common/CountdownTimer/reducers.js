import { TURN_ON_LIGHT_THEME } from './actions';

export const isLightThemeOn = (state = false, action) => {
    switch (action.type) {
        case TURN_ON_LIGHT_THEME:
            return true;    
        default:
            return state;
    }
}