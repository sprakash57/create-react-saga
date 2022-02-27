import { all } from 'redux-saga/effects';
import rootSaga from './saga';
import { usersSaga } from "../users/saga";

const generator = rootSaga();

describe('Test suite saga unit test', () => {
    test('should wait for all functions to complete and return', () => {
        expect(generator.next().value).toStrictEqual(all([usersSaga()]));
    });

    test('should perform no further work', () => {
        expect(generator.next().done).toBeTruthy();
    });
});
