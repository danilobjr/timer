import React, { Component } from 'react';
import * as _ from 'lodash';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { TitleBar } from 'components/common';
import { HomePage, TimerNewPage } from 'components/pages';
import { store } from 'config';

const history = syncHistoryWithStore(hashHistory, store);

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>    
                    <TitleBar />        
                    <Router history={history}>
                        <Route path="/">
                            <IndexRoute component={HomePage} />
                            <Route path="/timer/new" component={TimerNewPage} />
                        </Route>
                    </Router>                
                </div>
            </Provider>
        );
    }
}