import { combineReducers } from 'redux';
import userReducer from 'main/reducers/user-reducer';
import tasksReducer from 'main/reducers/tasks-reducer';
import teachersReducer from 'teachers-page/reducers/teachers-reducer';
import loginReducer from 'authentication/reducers/login-reducer';
import registerReducer from 'authentication/reducers/register-reducer';

export default combineReducers({
    user: userReducer,
    tasks: tasksReducer,

    teachers: teachersReducer,
    credentialsUser: loginReducer,
    registerUser: registerReducer
});
