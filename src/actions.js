import {createAction} from 'redux-actions';
import * as actions from './actions.constant.js'

export const saveCertificateId = createAction(actions.SAVE_CERTIFICATE);
export const clearCertificateId = createAction(actions.CLEAR_CERTIFICATE);