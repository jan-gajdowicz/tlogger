import { 
    API_URL, 
    CREATE_TASK, 
    REQUEST_TASKS_PENDING,
    REQUEST_TASKS_SUCCESS,
    REQUEST_TASKS_FAILED 
} from './constants'

export const createTask = (task) => ({
    type: CREATE_TASK,
    payload: task
})

export const requestTasks = () => async dispatch => {
    dispatch({ type: REQUEST_TASKS_PENDING })
    await fetch(API_URL)
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_TASKS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_TASKS_FAILED, payload: error })) 
}