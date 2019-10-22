import {put, all, takeLatest} from 'redux-saga/effects';

function* postSaveSaga(action) {
    const resp = yield fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.data)
    }).then(data => data.json())
    console.log("response", resp);
}

function* saveWatcher() {
    yield takeLatest('POST_SAVE', postSaveSaga)
}

export default function* saveSaga(){
    yield all([saveWatcher()])
}