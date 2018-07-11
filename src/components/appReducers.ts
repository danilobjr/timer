import * as _ from 'lodash';
import * as configReducers from 'config/reducers';
import * as timerReducers from 'components/common/Timer/reducers';
import * as navigationTabsReducers from 'components/common/NavigationTabs/reducers';
import * as titleBarReducers from 'components/common/TitleBar/reducers';
import * as timerPageReducers from 'components/pages/Timer/reducers';
import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { history } from 'config/history';

const middleware = routerMiddleware(history);

const reducers = _.assign(
  {
    router: routerReducer
  },
  configReducers,
  timerReducers,
  navigationTabsReducers,
  timerPageReducers,
  titleBarReducers
);

export const appReducers = combineReducers(reducers);
