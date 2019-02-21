import { createAction } from 'redux-actions';

import { userAuth } from 'main/actions/actionCreators';
import * as LoginController from 'authentication/controllers/login-controller';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS', (credentials) => ({credentials}));
export const loginError = createAction('LOGIN_ERROR');

export const loadCredentials = (body) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const credentials = await LoginController.loadCredentials(body);
        localStorage.DE = credentials.token;
        dispatch(loginSuccess(credentials));
        dispatch(userAuth());
    } catch (e) {
        dispatch(loginError(e))
    }
};
