import { createAction } from 'redux-actions';

export const addTasks = createAction('ADD_TASKS', (id, text, isCompleted) => ({ id, text, isCompleted }));
export const userAuth = createAction('USER_AUTH');
