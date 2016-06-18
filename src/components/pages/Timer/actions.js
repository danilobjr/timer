export const CREATE_TIMER = 'CREATE_TIMER';
export const REMOVE_TIMER = 'REMOVE_TIMER';

export const createTimer = (timer) => ({
    type: CREATE_TIMER,
    timer
})

export const removeTimer = (id) => ({
    type: REMOVE_TIMER,
    id
})