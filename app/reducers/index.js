import { combineReducers } from 'redux';
import { FETCH_USERS, FETCH_USERS_RESOLVED } from '../constants';

const initState = {
    users: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_LOOKUP':
            return { ...state, users: action.response };
        case FETCH_USERS_RESOLVED:
            return { ...state, users: action.data };
        default:
            return state;
    }
}

const reducer = combineReducers({
    userReducer
})

export default reducer;