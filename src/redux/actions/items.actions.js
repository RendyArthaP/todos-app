import axios from 'axios'

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export const POST_ITEMS_REQUEST = 'POST_ITEMS_REQUEST';
export const POST_ITEMS_SUCCESS = 'POST_ITEMS_SUCCESS';
export const POST_ITEMS_ERROR = 'POST_ITEMS_ERROR';

export const PATCH_ITEMS_REQUEST = 'PATCH_ITEMS_REQUEST';
export const PATCH_ITEMS_SUCCESS = 'PATCH_ITEMS_SUCCESS';
export const PATCH_ITEMS_ERROR = 'PATCH_ITEMS_ERROR';

export const DELETE_ITEMS_REQUEST = 'DELETE_ITEMS_REQUEST';
export const DELETE_ITEMS_SUCCESS = 'DELETE_ITEMS_SUCCESS';
export const DELETE_ITEMS_ERROR = 'DELETE_ITEMS_ERROR';

export const getItemsRequest = () => {
  return {
    type: GET_ITEMS_REQUEST
  }
}

export const getItemsSuccess = (result) => {
  return {
    type: GET_ITEMS_SUCCESS,
    result
  }
}

export const getItemsError = (error) => {
  return {
    type: GET_ITEMS_ERROR,
    error
  }
}

export const postItemsRequest = () => {
  return {
    type: POST_ITEMS_REQUEST
  }
}

export const postItemsSuccess = (result) => {
  return {
    type: POST_ITEMS_SUCCESS,
    result
  }
}

export const postItemsError = (error) => {
  return {
    type: POST_ITEMS_ERROR,
    error
  }
}

export const patchItemsRequest = () => {
  return {
    type: PATCH_ITEMS_REQUEST
  }
}

export const patchItemsSuccess = (result) => {
  return {
    type: PATCH_ITEMS_SUCCESS,
    result
  }
}

export const patchItemsError = (error) => {
  return {
    type: PATCH_ITEMS_ERROR,
    error
  }
}

export const deleteItemsRequest = () => {
  return {
    type: DELETE_ITEMS_REQUEST
  }
}

export const deleteItemsSuccess = (result) => {
  return {
    type: DELETE_ITEMS_SUCCESS,
    result
  }
}

export const deleteItemsError = (error) => {
  return {
    type: DELETE_ITEMS_ERROR,
    error
  }
}

export const getItems = (todo_id) => {
  return function(dispatch) {
    dispatch(getItemsRequest())
    const token = localStorage.token
    axios
      .get(`${process.env.REACT_APP_ITEMS}/todos/${todo_id}/items`, {
        headers: {
          Authorization: 'Bearer' + token
        }
      })
      .then((result) => dispatch(getItemsSuccess(result.data)))
      .catch((error) => dispatch(getItemsError(error)))
  }
}

export const postItems = () => {
  return function(dispatch) {
    
  }
}

export const patchItems = () => {
  return function(dispatch) {
    
  }
}

export const deleteItems = () => {
  return function(dispatch) {
    
  }
}
