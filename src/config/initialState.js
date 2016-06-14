import * as uuid from 'node-uuid';

export const initialState = {
    timers: [
        {
            id: uuid.v4(),
            name: 'Timer',
            hours: 0,
            minutes: 10,
            seconds: 0
        }
    ]
};