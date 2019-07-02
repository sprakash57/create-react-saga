import {put, takeLatest, all} from 'redux-saga/effects';


function* postLookupSaga(data) {
    console.log('----> in root saga');
    const res = yield fetch('https://reqres.in/api/users', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify()
                            })
                            .then(data => data.json())
    console.log('rootsaga', res);
    yield put({type: 'RECEIVE_LOOKUP', res});
}

function* actionWatcher() {
    yield takeLatest('POST_LOOKUP', postLookupSaga)
}

export default function* rootSaga() {
    yield all([actionWatcher()])
}