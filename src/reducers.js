import { 
  UPDATE_MODAL,
  CREATE_TASK, 
  DELETE_TASK, 
  UPDATE_TASK, 
  REQUEST_TASKS_PENDING,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILED 
} from './constants'

const initialState = {
  tasks: [],
  modal: {
    modalOpen: false,
    modalHeader: '',
    modalContent: '',
    showButtons: false
  },
  isPending: false,
  error: ''
}

export const modal = (state = initialState.modal, action = {}) => {
  switch(action.type) {
    case UPDATE_MODAL:
      return state = action.payload
    default:
      return state
  }
}
         
export const tasks = (state = initialState, action = {}) => {
  switch(action.type) {
    case CREATE_TASK:
      return {...state, tasks: [...state.tasks, action.payload]}
    case DELETE_TASK:
      console.log(action.payload)
            return {...state, tasks: state.tasks.filter(task => {
        return task.taskID !== action.payload}
      )}
    case UPDATE_TASK:
      return {...state, tasks: state.tasks.map(task => {
        if(task.taskID === action.payload.taskID) {
          task = action.payload
        }
        return task
      })}
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