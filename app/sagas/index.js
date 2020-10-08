import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchUsersRejected, fetchUsersResolved } from '../actions';
import { FETCH_USERS, ERROR } from '../constants';
import fetchData from '../libs/fetchData';

function* onLoadUsers() {
    try {
        const response = yield call(fetchData);
        yield put(fetchUsersResolved(response));
    } catch (error) {
        yield put(fetchUsersRejected(ERROR));
    }
}

function* watchActions() {
    yield takeLatest(FETCH_USERS, onLoadUsers)
}

export default function* rootSaga() {
    yield all([watchActions()])
}
