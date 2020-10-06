import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchUsersResolved } from '../actions';
import { ERROR, FETCH_USERS } from '../constants';
import fetchData from '../libs/fetchData';

function* onLoadUsers() {
    try {
        const response = yield call(fetchData);
        yield put(fetchUsersResolved(response));
    } catch (error) {
        yield put(fetchUsersResolved(ERROR));
    }
}

function* watchActions() {
    yield takeLatest(FETCH_USERS, onLoadUsers)
}

export default function* rootSaga() {
    yield all([watchActions()])
}
