import { Record } from 'immutable';

export default class TeacherRecord extends Record({
    email: null,
    id: null,
    user: null,
    createdAt: null,
    updatedAt: null,
}){
    static parse(teacher) {
        return new TeacherRecord({
            email: teacher.email,
            id: teacher.id,
            user: teacher.user,
            createdAt: teacher.created_at,
            updatedAt: teacher.updated_at
        })
    }
};
