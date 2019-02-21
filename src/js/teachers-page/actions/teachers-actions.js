import createAction from "redux-actions/es/createAction";
import * as TeachersController from 'teachers-page/controllers/teachers-controller';

export const loadTeachersRequest = createAction('LOAD_TEACHERS_REQUEST');
export const loadTeachersSuccess = createAction('LOAD_TEACHERS_SUCCESS', teachers => ({teachers}));
export const loadTeachersError = createAction('LOAD_TEACHERS_ERROR');

// const delay = () => new Promise(res => setTimeout(() => res(), 2000))

export const loadTeachers = () => async (dispatch) => {
    dispatch(loadTeachersRequest());
    try {
        const teachers = await TeachersController.loadTeachers();

        dispatch(loadTeachersSuccess(teachers));
    } catch (e) {
        dispatch(loadTeachersError(e))
    }
};
