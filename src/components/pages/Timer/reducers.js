import * as uuid from 'node-uuid';
import { CREATE_TIMER } from './actions';

export const timers = (state = [], action) => {
    switch (action.type) {
        case CREATE_TIMER:
            const { timer } = action;
            timer.id = uuid.v4();
            return [...state, timer];
        default:
            return state;
    }
}