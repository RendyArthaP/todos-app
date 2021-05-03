import { combineReducers } from 'redux';
import handleAuth from './auth.reducers';
import handleItems from './items.reducers';
import handleTodos from './todos.reducers';

const rootReducers = combineReducers({
  handleAuth,
  handleItems,
  handleTodos
})

export default rootReducers;