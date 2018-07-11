import { CHANGE_ACTIVE_NAVIGATION_TAB_ITEM } from './actions';

export const activeNavigationTabItemIndexHistory = (state = [0, -1], action: any) => {
  switch (action.type) {
    case CHANGE_ACTIVE_NAVIGATION_TAB_ITEM:
      return [action.itemIndex, state[0]];
    default:
      return state;
  }
}
