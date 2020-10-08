import { FETCH_USERS, FETCH_USERS_REJECTED, FETCH_USERS_RESOLVED } from "../constants"

export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersResolved = data => ({ type: FETCH_USERS_RESOLVED, data });
export const fetchUsersRejected = data => ({ type: FETCH_USERS_REJECTED, data });
