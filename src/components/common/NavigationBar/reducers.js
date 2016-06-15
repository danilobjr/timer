import { CHANGE_ACTIVE_NAVIGATION_BAR_ITEM_ID } from './actions';

export const currentActiveNavigationBarItemId = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAVIGATION_BAR_ITEM_ID:
            return action.id;
        default:
            return state;
    }
}