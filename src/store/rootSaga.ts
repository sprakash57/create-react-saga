import { all } from "redux-saga/effects";
import { usersSaga } from "store/users/saga";

export default function* rootSaga() {
    yield all([usersSaga()]);
}