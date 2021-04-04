import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import App from './App';
import reducer from './reducers';
import rootSaga from './sagas';
import './index.css'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

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
