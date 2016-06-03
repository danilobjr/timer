import { CHANGE_ACTIVE_NAVIGATION_BAR_ITEM } from './actions';

export const currentActiveNavigationBarItem = (state = 'Timer', action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAVIGATION_BAR_ITEM:
            return action.text;
        default:
            return state;
    }
}