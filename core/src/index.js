import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import reducer from './reducers';
import rootSaga from './sagas';
import './index.scss'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
