import { FETCH_USERS, FETCH_USERS_RESOLVED } from "../constants"

export const postLookup = (data) => ({
    type: 'POST_LOOKUP',
    data
})

export const getLookup = (data) => ({
    type: 'GET_LOOKUP',
    data
})

export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersResolved = data => ({ type: FETCH_USERS_RESOLVED, data });