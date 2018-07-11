export const CHANGE_ACTIVE_NAVIGATION_TAB_ITEM = 'CHANGE_ACTIVE_NAVIGATION_TAB_ITEM';

export const changeActiveNavigationTabItem = (itemIndex: number) => ({
  type: CHANGE_ACTIVE_NAVIGATION_TAB_ITEM,
  itemIndex
})
