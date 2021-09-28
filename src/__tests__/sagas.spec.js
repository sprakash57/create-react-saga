import { all } from 'redux-saga/effects';
import rootSaga, { watchActions } from '../sagas';
const generator = rootSaga();

describe('Test suite saga unit test', () => {
  test('should wait for all functions to complete and return', () => {
    expect(generator.next().value).toStrictEqual(all([watchActions()]));
  });

  test('should perform no further work', () => {
    expect(generator.next().done).toBeTruthy();
  });
});
