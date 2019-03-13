import { createAction } from 'redux-actions';

import { userAuth } from 'main/actions/actionCreators';
import * as RegisterController from 'authentication/controllers/register-controller';

export const regRequest = createAction('REGISTER_REQUEST');
export const regSuccess = createAction('REGISTER_SUCCESS', (regInfo) => ({ regInfo }));
export const regError = createAction('REGISTER_ERROR');

export const loadRegisterInfo = (body) => async (dispatch) => {
    dispatch(regRequest());
    try {
        const register = await RegisterController.registerInfo(body);
        dispatch(regSuccess(register));
    } catch ( e ) {
        dispatch(regError(e))
    }
};
