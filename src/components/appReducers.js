import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { countdownTimerReducers } from 'components/common/CountdownTimer';
import { navigationBarReducers } from 'components/common/NavigationBar';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    countdownTimerReducers,
    navigationBarReducers
);

export const appReducers = combineReducers(reducers);