import axios from 'axios';
import { List } from 'immutable';
import TeacherRecord from 'teachers-page/records/teacher-record';

export const loadTeachers = async () => {
    const { data } = await axios.get('/api/teachers');
    return  new List(data.map(TeacherRecord.parse));
};
