import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./users";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        usersReducer
    },
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production"
});

sagaMiddleware.run(rootSaga);
