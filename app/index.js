import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);