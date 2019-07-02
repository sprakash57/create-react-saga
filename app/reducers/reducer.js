import {combineReducers} from 'redux';

const initState = {
    user: {}
}

const verifyReducer = (state = initState, action) => {
    console.log('verifyReducer', action);
    switch(action.type) {
        case 'POST_LOOKUP':
            return {...state, user: action.data};
        case 'RECEIVE_LOOKUP':
            return {...state, user: action.data};
        default:
            return state;
    }
    
}

const reducer = combineReducers({
    verifyReducer
})

export default reducer;