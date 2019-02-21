import { handleActions } from 'redux-actions';
import {List}  from 'immutable';

import TeachersReducerRecord from '../records/teachers-reducer-record';
import {loadTeachersError, loadTeachersRequest, loadTeachersSuccess} from "../actions/teachers-actions";

const teachersReducer = handleActions({
    [loadTeachersRequest]: state => state.set('isTeachersLoading', true),
    [loadTeachersSuccess]: (state, action) => state.set('isTeachersLoading', false).set('teachersList', action.payload.teachers),
    [loadTeachersError]: state => state.set('isTeachersLoading', false).set('teachersList', new List()),
}, new TeachersReducerRecord({
    isTeachersLoading: true,
    teachersList: new List(),
}));

export default teachersReducer;
