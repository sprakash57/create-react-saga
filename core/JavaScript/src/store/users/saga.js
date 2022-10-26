import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchUsersReject, fetchUsersSuccess } from './index';
import fetchUsers from '../../utils/fetchUsers';

function* workUsersFetch() {
    try {
        const response = yield call(fetchUsers);
        yield put(fetchUsersSuccess(response));
    } catch (error) {
        yield put(fetchUsersReject('Hmm... Looks like there is some network issue!!'));
    }
}

export function* usersSaga() {
    yield takeEvery('users/fetchUsers', workUsersFetch)
}
