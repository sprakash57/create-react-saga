import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from 'store/users';
import rootSaga from "store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        usersReducer
    },
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export type RootState = {
    usersReducer: {
        users: User[],
        isLoading: boolean,
        message: string,
    }
}

export type AppDispatch = typeof store.dispatch;