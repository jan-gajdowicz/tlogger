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

export const modifyTasks = (state = initialState, action = {}) => {
    switch(action.type) {
        case CREATE_TASK:
            return Object.assign({}, state, { tasks: state.tasks.push(action.payload) })
        default:
            return state
    }
} 

export const requestTasks = (state = initialState, action = {}) => {
    switch(action.type) {
        case REQUEST_TASKS_PENDING: 
            return Object.assign({}, state, { isPending: true })
        case REQUEST_TASKS_SUCCESS: 
            return Object.assign({}, state, { tasks: action.payload, isPending: false })
        case REQUEST_TASKS_FAILED: 
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default: 
            return state
    }
}