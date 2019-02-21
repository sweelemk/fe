import { handleActions } from 'redux-actions';

import UserReducerRecord from 'main/records/user-reducer-record';
import { userAuth } from 'main/actions/actionCreators';

const userReducer = handleActions(
    {
        [userAuth]: (state) =>  state.set('isAuthorized', true)
    },
    new UserReducerRecord({
        isAuthorized: false
    }));

export default userReducer;
