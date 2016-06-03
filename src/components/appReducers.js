import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { navigationBarReducers } from 'components/common/NavigationBar';

const reducers = _.assign(
    {
        routing: routerReducer
    },
    navigationBarReducers
);

export const appReducers = combineReducers(reducers);