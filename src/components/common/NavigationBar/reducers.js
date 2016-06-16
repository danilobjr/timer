import { CHANGE_ACTIVE_NAVIGATION_BAR_ITEM_ID } from './actions';

export const activeNavigationBarItemIdHistory = (state = [0,-1], action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAVIGATION_BAR_ITEM_ID:
            return [action.id, state[0]];
        default:
            return state;
    }
}