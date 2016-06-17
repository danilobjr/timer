import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as configReducers from 'config/reducers';
import * as countdownTimerReducers from 'components/common/CountdownTimer/reducers';
import * as navigationTabsReducers from 'components/common/NavigationTabs/reducers';
import * as titleBarReducers from 'components/common/TitleBar/reducers';
import * as timerReducers from 'components/pages/Timer/reducers';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    configReducers,
    countdownTimerReducers,
    navigationTabsReducers,
    timerReducers,
    titleBarReducers
);

export const appReducers = combineReducers(reducers);