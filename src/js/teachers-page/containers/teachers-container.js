import { connect } from 'react-redux';

import Teachers from 'teachers-page/components/teachers/teachers';
import {loadTeachers} from "teachers-page/actions/teachers-actions";

export default connect(state => ({
    isTeachersLoading: state.teachers.get('isTeachersLoading'),
    teachersList: state.teachers.get('teachersList'),
}), dispatch => ({
    onStartPage: () => {
        dispatch(loadTeachers())
    }
}))(Teachers);
