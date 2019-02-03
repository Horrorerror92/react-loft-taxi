import { login, logout } from './actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isAuthorized = handleActions({
  [login] : () => true,
  [logout] : () => false,
}, false);

export default combineReducers( { 
  isAuthorized,
  // While no action processing. "auth" and "form" are under development
  auth: (state = {}) => state,
  form: (state = {}) => state
})

export const getAuthorized = state => state.auth.isAuthorized;