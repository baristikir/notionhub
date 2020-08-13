// -- This JS File is for executing the type of action  -- //
    // --   firing events for specific action type   -- //

// -- Package Imports -- //


// -- Project Resource Imports -- //
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    // For spinning state when authentication starts
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    // Returning the success object with token
    // and stoping spin state
    return updateObject(state, {
        token: action.token,
        loading: false
    });
}

const authFail = (state, action) => {
    // Error caused in the dispatch will be returned in the Object
    // and stoping spin state
    return updateObject(state,{
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

// Manipulating the state via checking the action type and firing the event
const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;
