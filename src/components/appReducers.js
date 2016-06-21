import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as configReducers from 'config/reducers';
import * as timerReducers from 'components/common/Timer/reducers';
import * as navigationTabsReducers from 'components/common/NavigationTabs/reducers';
import * as titleBarReducers from 'components/common/TitleBar/reducers';
import * as timerPageReducers from 'components/pages/Timer/reducers';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    configReducers,
    timerReducers,
    navigationTabsReducers,
    timerPageReducers,
    titleBarReducers
);

export const appReducers = combineReducers(reducers);