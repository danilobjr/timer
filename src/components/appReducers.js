import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as configReducers from 'config/reducers';
import * as countdownTimerReducers from 'components/common/CountdownTimer/reducers';
import * as navigationBarReducers from 'components/common/NavigationBar/reducers';
import * as titleBarReducers from 'components/common/TitleBar/reducers';
import * as timerReducers from 'components/pages/Timer/reducers';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    configReducers,
    countdownTimerReducers,
    navigationBarReducers,
    timerReducers,
    titleBarReducers
);

export const appReducers = combineReducers(reducers);