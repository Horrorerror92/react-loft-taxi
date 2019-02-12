import { login, logout } from './actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const isAuthorized = handleActions({
  [login] : () => true,
  [logout] : () => false,
}, false);

export default combineReducers( { 
  isAuthorized,
 
})

export const getAuthorized = state => state.auth.isAuthorized;