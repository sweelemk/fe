import { handleActions } from 'redux-actions';
import { List }  from 'immutable';


import LoginReducerRecord from 'authentication/record/login-reducer-record';
import { loginRequest, loginSuccess, loginError } from 'authentication/actions/login-actions';

const loginReducer = handleActions({
    [loginRequest]: state => state.set('isCredentialLoadings', true),
    [loginSuccess]: (state, action) => state.set('isCredentialLoadings', false).set('credentials', action.payload.credentials),
    [loginError]: state => state.set('isCredentialLoadings', false).set('credentials', new List()),
}, new LoginReducerRecord({
    isCredentialLoadings: true,
    credentials: new List()
}));



export default loginReducer;
