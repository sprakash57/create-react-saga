import { combineReducers } from 'redux';

const initState = {
    users: { data: [] }
}

const verifyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_LOOKUP':
            return { ...state, users: action.response };
        default:
            return state;
    }
}

const reducer = combineReducers({
    verifyReducer
})

export default reducer;