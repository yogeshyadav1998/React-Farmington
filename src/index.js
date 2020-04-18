import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import subsidyrequestreducer from './store/reducers/subsidy';
import postadreducer from './store/reducers/postad';
import fetchadsreducer from './store/reducers/fetchads';
import authreducer from './store/reducers/auth';

const rootreducer = combineReducers({
    subsidyrequest: subsidyrequestreducer,
    fetchads: fetchadsreducer,
    postad: postadreducer,
    auth: authreducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
