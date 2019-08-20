import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import certificate from './certificate.reducer';
import email from './certificate.reducer';
import jobSignId from './certificate.reducer';

export default combineReducers({
  form, certificate, email, jobSignId
})