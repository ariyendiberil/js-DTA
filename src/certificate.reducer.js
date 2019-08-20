import {SAVE_CERTIFICATE, CLEAR_CERTIFICATE} from './actions.constant';

const certificate = (state = [], action) => {
  switch (action.type) {
    case SAVE_CERTIFICATE: {
      // return {...state, a: action.payload};
      return action.payload;
    }
    case CLEAR_CERTIFICATE: {
      return null;
    }
    default: {
      return null;
    }
    }
}

export default certificate;