import { 
    CREATE_TASK, 
    REQUEST_TASKS_PENDING,
    REQUEST_TASKS_SUCCESS,
    REQUEST_TASKS_FAILED 
} from './constants'

const initialState = {
    tasks: [],
    isPending: false,
    error: ''
}
         
export const tasks = (state = initialState, action = {}) => {
    switch(action.type) {
        case CREATE_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case REQUEST_TASKS_PENDING: 
            return {...state, isPending: true }
        case REQUEST_TASKS_SUCCESS: 
            return {...state, tasks: action.payload, isPending: false }
        case REQUEST_TASKS_FAILED: 
            return {...state, error: action.payload, isPending: false }
        default: 
            return state
    }
}