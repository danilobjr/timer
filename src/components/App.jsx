import React, { Component } from 'react';
import * as _ from 'lodash';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { TitleBar } from 'components/common';
import { ChronometerPage, TimerPage, TimerNewPage } from 'components/pages';
import { appReducers } from './appReducers';
import { initialState } from 'config/initialState';

const store = createStore(appReducers, initialState);
const history = syncHistoryWithStore(hashHistory, store);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>    
                    <TitleBar />        
                    <Router history={history}>
                        <Route path="/">
                            <IndexRoute component={TimerPage} />
                            <Route path="timer" component={TimerPage} />
                            <Route path="timer/new" component={TimerNewPage} />
                            <Route path="chronometer" component={ChronometerPage} />
                        </Route>
                    </Router>                
                </div>
            </Provider>
        );
    }
}