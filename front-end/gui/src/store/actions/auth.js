// -- This JS File is for all methods of the action types -- //
           // --  events for login and logout  -- //

// -- Package Imports -- //
import axios from 'axios';

// -- Project Resource Imports -- //
import * as actionTypes from './actionTypes';

// Event for starting the authentication process
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

// Event for returning storage data from the session
// by sucess
export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

// Event for returning the error occured trying to authenticate
// by fail
export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

// Event for sending credential data from user to the server
// and try to login also checking the expiration of the token
export const authLogin = (username, password) => {
    return dispatch => {
        // Dispatch the auth method into the queue
        dispatch(authStart());

        // Http Post request with the credentials from the user
        // rest-auth package will be used for authentication cases
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        // when no error occurs ->Dispatching the Success status
        // with the generated token which will be stored inside
        // the local storage of the browser session.
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        // catching the error when login was not successfully
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

// Event for logout the current user
// Removing the current data from the session
// by logout action or expiration
export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

// Event for checking the expiration Time of the session token
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authSignup = (username, email, password, confirmPassword) => {
    return dispatch => {
        // Dispatch the auth method into the queue
        dispatch(authStart());

        // Http Post request with the credentials from the user
        // rest-auth package will be used for authentication cases
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password,
            password2: confirmPassword
        })
        // when no error occurs -> Dispatching the Success status
        // with the generated token which will be stored inside
        // the local storage of the browser session.
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        // catching the error when signup was not successfully
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token == undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
