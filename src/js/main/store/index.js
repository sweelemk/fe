import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'main/reducers';
import {loginSuccess} from "../../authentication/actions/login-actions";
import {userAuth} from "../actions/actionCreators";

export default (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        ),
    );

    if(localStorage.DE) {
        const user = { token: localStorage.DE };
        store.dispatch(loginSuccess(user));
        store.dispatch(userAuth());
    }

    return store;
};
