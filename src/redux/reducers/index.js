import { combineReducers } from 'redux';
import handleAuth from './auth.reducers';

const rootReducers = combineReducers({
  handleAuth
})

export default rootReducers;