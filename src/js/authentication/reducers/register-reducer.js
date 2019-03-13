import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import RegisterReducerRecord from 'authentication/record/register-reducer-record';
import { regRequest, regSuccess, regError } from 'authentication/actions/register-actions';

const registerReducer = handleActions({
    [regRequest]: state => state.set('isRegisterLoadings', true),
    [regSuccess]: (state, action) => state.set('isRegisterLoadings', false).set('registerInfo', action.payload.registerInfo),
    [regError]: state => state.set('isRegisterLoadings', false).set('registerInfo', new List()),
}, new RegisterReducerRecord({
    isRegisterLoadings: true,
    registerInfo: new List()
}));


export default registerReducer;
