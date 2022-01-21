import { fetchUsers, fetchUsersRejected, fetchUsersResolved } from 'actions';
import { FETCH_USERS, FETCH_USERS_REJECTED, FETCH_USERS_RESOLVED } from '../constants';

describe('Test suite for all the actions', () => {
    test('Should test fetchUsers', () => {
        expect(fetchUsers()).toEqual({ type: FETCH_USERS });
    });

    test('Should test fetchUsersResolved', () => {
        expect(fetchUsersResolved('response')).toEqual({ type: FETCH_USERS_RESOLVED, data: 'response' })
    });

    test('Should test fetchUsersRejected', () => {
        expect(fetchUsersRejected('response')).toEqual({ type: FETCH_USERS_REJECTED, data: 'response' })
    });
});
