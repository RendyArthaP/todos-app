import axios from 'axios';

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const POST_TODOS_REQUEST = 'POST_TODOS_REQUEST';
export const POST_TODOS_SUCCESS = 'POST_TODOS_SUCCESS';
export const POST_TODOS_ERROR = 'POST_TODOS_REQUEST';

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}

export const getTodosSuccess = (result) => {
  return {
    type: GET_TODOS_SUCCESS,
    result
  }
}

export const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    error
  }
}

export const postTodosRequest = () => {
  return {
    type: POST_TODOS_REQUEST
  }
}

export const postTodosSuccess = (result) => {
  return {
    type: POST_TODOS_SUCCESS,
    result
  }
}

export const postTodosError = (error) => {
  return {
    type: POST_TODOS_ERROR,
    error
  }
}

export const getTodos = () => {
  return function(dispatch) {
    dispatch(getTodosRequest())
    const token = localStorage.token
    axios
      .get(process.env.REACT_APP_TODOS, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then((result) => dispatch(getTodosSuccess(result.data)))
      .catch((error) => dispatch(getTodosError(error)))
  }
}

export const postTodos = (data) => {
  return function(dispatch) {
    dispatch(postTodosRequest())

    axios
    .post(process.env.REACT_APP_TODOS, data)
    .then((result) => dispatch(postTodosSuccess(result.data)))
    .error((error) => dispatch(postTodosError(error)))
  }
}



