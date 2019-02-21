import {handleActions } from 'redux-actions';
import {addTasks} from "../actions/actionCreators";

const initialState = [];


const tasksReducer = handleActions(
    {
        [addTasks]: (state = [], action) => {
            return [...state, action.payload]
        }
    },
    initialState
);

export default tasksReducer;

