export const ENABLE_BACK_BUTTON = 'ENABLE_BACK_BUTTON';
export const DISABLE_BACK_BUTTON = 'DISABLE_BACK_BUTTON';
export const SET_BACK_BUTTON_CALLBACK = 'SET_BACK_BUTTON_CALLBACK';

export const enableBackButton = () => ({
    type: ENABLE_BACK_BUTTON
})

export const disableBackButton = () => ({
    type: DISABLE_BACK_BUTTON
})

export const setBackButtonCallback = (callback) => ({
    type: SET_BACK_BUTTON_CALLBACK,
    callback
})