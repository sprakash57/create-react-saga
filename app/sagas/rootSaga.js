import {put, takeLatest, all} from 'redux-saga/effects';


function* postLookupSaga(action) {
    const resp = yield fetch('https://api.myjson.com/bins/yg6gv', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(action.data)
                            })
                            .then(data => data.json())
    //console.log('rootsaga', resp);
    yield put({type: 'RECEIVE_LOOKUP', resp});
}

function* actionWatcher() {
    yield takeLatest('POST_LOOKUP', postLookupSaga)
}

export default function* rootSaga() {
    yield all([actionWatcher()])
}