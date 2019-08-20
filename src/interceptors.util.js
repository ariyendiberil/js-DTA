// import * as actionCreators from '../state/actions/index.actions';
// import uuidV4 from 'uuid/v4';
import result from 'lodash/result';
import { getProperties } from './common.util';
// import tracker from '../utils/googleAnalytics.util';
// import { endpoints } from './constant/connect.constant';
import axios from 'axios';
// import { clearCustomerData } from '../common.thunks';

// Interceptor that sets the defaultPayload
export const addDefaultPayloadInterceptor = (store) => (config) => {
  // if (config.method === 'get') {
  //   return config;
  // }
  const state = store.getState();
  // if (!(config.auth || ipassport)) return Promise.reject('no auth');
  const extraPayload = {
    // language: result(state, 'userInfo.lang', 'id'),
    // language: result(state, 'currentLanguage.id', 'id'),
    // TXID: uuidV4()
  };
  const mustPayload = {
    // language: result(state, 'userInfo.lang', 'id'),
    // language: result(state, 'currentLanguage.id', 'id'),
    // TXID: uuidV4()
  };

  const mustHeader = {
    // ipassport: result(state, 'userInfo.sessionId', null)
  }
  const transformedMustPayload = removeFalsyValues({data: mustPayload}).data;
  const transformedMustHeader = removeFalsyValues({data: mustHeader}).data;
  config.data = Object.assign(getProperties(extraPayload, result(config, 'additional', [])), config.data, transformedMustPayload);
  config.headers = Object.assign({}, config.headers, transformedMustHeader);
  return config;
};

// Interceptor that checks the status of the response
// export const getStatusValidatorInterceptor = (store) => (response) => {
//   const {response: {status}} = response; // if err, this is the location of the status
//   if (status === 401 || status === 403) { // invalid session

//     // store.dispatch(clearCustomerData());
//   }
//   throw response;
// };

export const removeFalsyValues = (config = {}) => {
  if (config.method === 'get') {
    return config;
  }
  const transformedPayload = {};
  const payload = result(config, 'data', {});
  // forEach(payload, (obj, key) => {
  //   if ((payload[key] && payload[key] !== 'undefined') || payload[key] === false){
  //     transformedPayload[key] = payload[key];
  //   }
  // })
  // return transformedPayload;
  Object.keys(payload).map((key) => {
    if ((payload[key] && payload[key] !== 'undefined') || payload[key] === false) { // Do not remove key if its false or it has some value
      transformedPayload[key] = payload[key];
    }
  });
  config.data = transformedPayload;
  return config;
};
