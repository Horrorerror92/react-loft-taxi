import { combineReducers } from 'redux';
import auth from './Auth';
//import { fork } from 'redux-saga/effects';
import { reducer as newReducer} from 'redux-form';

export default combineReducers( { auth, form : newReducer } );
export function* rootSaga() {
  
}