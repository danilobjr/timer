import { MAXIMIZE_WINDOW, MINIMIZE_WINDOW } from './actions';

export const windowIsMaximized = (state = false, action) => {
    switch (action.type) {
        case MAXIMIZE_WINDOW:
            return true;
        case MINIMIZE_WINDOW:
            return false;
        default:
            return state;
    }
}