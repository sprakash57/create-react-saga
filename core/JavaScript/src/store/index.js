import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import usersReducer from "./users";
import { usersSaga } from "./users/saga";

function* rootSaga() {
    yield all([usersSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        usersReducer
    },
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production"
});

sagaMiddleware.run(rootSaga);
