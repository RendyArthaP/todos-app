import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR
} from '../actions/todos.actions';

const initialState = {
  data: []
}

const handleTodos = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state
      }
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_TODOS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case POST_TODOS_REQUEST: 
      return {
        ...state
      }
    case POST_TODOS_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.result
        ]
      }
    case POST_TODOS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleTodos