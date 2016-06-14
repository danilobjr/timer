import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { countdownTimerReducers } from 'components/common/CountdownTimer';
import { navigationBarReducers } from 'components/common/NavigationBar';
import { titleBarReducers } from 'components/common/TitleBar';
import { timerReducers } from 'components/pages/Timer';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    countdownTimerReducers,
    navigationBarReducers,
    timerReducers,
    titleBarReducers
);

export const appReducers = combineReducers(reducers);