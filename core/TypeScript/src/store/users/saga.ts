import { put, call, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects';
import { fetchUsersReject, fetchUsersSuccess } from 'store/users';
import fetchUsers from 'utils/fetchUsers';

function* workUsersFetch(): Generator<
    CallEffect<User[]> | PutEffect<{ payload: any, type: string }>,
    void,
    unknown
> {
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
