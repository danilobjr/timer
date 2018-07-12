import * as _ from 'lodash';
// import * as configReducers from 'src/redux/reducers';
import * as timerReducers from 'components/common/Timer/reducers';
// import * as navigationTabsReducers from 'components/common/NavigationTabs/reducers';
import * as titleBarReducers from 'components/common/TitleBar/reducers';
// import * as timerPageReducers from 'components/pages/timer/reducers';
import { combineReducers } from 'redux';

const reducers = _.assign(
  // configReducers,
  timerReducers,
  // navigationTabsReducers,
  // timerPageReducers,
  titleBarReducers,
);

export const appReducers = combineReducers(reducers);
