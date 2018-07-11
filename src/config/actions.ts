export const SET_WINDOW_IS_MAXIMIZED = 'SET_WINDOW_IS_MAXIMIZED';
export const SET_WINDOW_IS_NOT_MAXIMIZED = 'SET_WINDOW_IS_NOT_MAXIMIZED';

export const setWindowIsMaximized = () => ({
  type: SET_WINDOW_IS_MAXIMIZED
})

export const setWindowIsMinimized = () => ({
  type: SET_WINDOW_IS_NOT_MAXIMIZED
})
