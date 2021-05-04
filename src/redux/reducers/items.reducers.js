import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR
} from '../actions/items.actions.js';

const initialState = {
  data: []
}

const handleItems = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state
      }
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_ITEMS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleItems