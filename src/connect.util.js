import axios from 'axios';
import { endpoints, dynamicEndPoints } from './connect.constant';
import { addDefaultPayloadInterceptor, removeFalsyValues, setIpassport, getStatusValidatorInterceptor } from './interceptors.util';
import forEach from 'lodash/forEach';

const baseURLv2 = 'https://api.smma.co.id/thirdparty/dta';
const baseURLv1 = 'https://poc.tandatanganasli.com/api';
// const baseURLv1 = 'http://192.168.43.44:8100';
// const baseURLv1 = 'https://api.smma.co.id/thirdparty/dta/';
// const baseURLv1 = 'https://api.smma.co.id/thirdparty/dta/';
// const baseURLv2 = 'https://poc.tandatanganasli.com/api/';


// const baseConfig ={ 
//   baseURL: baseURLv1
// };
const baseConfig = [
// v1  
{
  baseURL: baseURLv1,
},
{
  baseURL: baseURLv2 
}
]

export const postWithAuth = (endpoint, auth = {}, data = {}, params = {}) => {
  const config = {
    ...baseConfig,
    method: 'post', 
    url: endpoints[endpoint],
    // data,
    params: data,
    auth,
  }
  return axios(config);
}

export const posts = (version, endpoint, data = {}, params = {}, isDynamic = false, endpointsParams) => {
  const config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    data,
    // params: data,
  }
  console.log('config :',config);
  return axios(config);
}

export const postsCertificate = (version, endpoint, data = {}, params = {}, isDynamic = false, endpointsParams) => {
  const configheaders = {
    Authorization: 'Bearer '+sessionStorage.getItem("tokenCertifcate")
  }
  console.log('cek config herdears :',configheaders);

  const config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    data,
    headers: configheaders
   // headers: {Authorization:'Bearer '+ localStorage.getItem("tokenCertificate")}
    // params: data,
  }
  console.log('config :',config);
  return axios(config);
}

export const postsCertificateDownload = (version, endpoint, data = {}, params = {}, isDynamic = false, endpointsParams) => {
  const configheaders = {
    Authorization: 'Bearer '+sessionStorage.getItem("tokenCertifcate")
  }
  console.log('cek config herdears :',configheaders);

  const config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    data,
    headers: configheaders
   // headers: {Authorization:'Bearer '+ localStorage.getItem("tokenCertificate")}
    // params: data,
  }
  console.log('config :',config);
  return axios(config);
}

export const postMultiPart = (version, endpoint, data, params = {}, isDynamic = false, endpointsParams) => {
  const {photo, asd} = params;
  let config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    headers: {appId: '1', userId: '1', companyId: '1', },
    
  }
  const url = config.baseURL + (isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint]);
  let form = new FormData();
  forEach(params, (obj, key) => {
    form.append(key, obj);
  })
  config = {...config, body: form}; 
  console.log('log config:', config);
  return fetch(url, config).then((res) => res.json());
}

export const postMultiPartSignature = (version, endpoint, data, params = {}, isDynamic = false, endpointsParams) => {
  const {photo, asd} = params;

  const configheaders = {
    Authorization: 'Bearer '+sessionStorage.getItem("tokenCertifcate"),
    appId:'1',
    userId:'1',
    companyId:'1'
  }
  console.log('cek config herdears :',configheaders);

  let config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    headers: configheaders
  }
  const url = config.baseURL + (isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint]);
  let form = new FormData();
  forEach(params, (obj, key) => {
    form.append(key, obj);
  })
  config = {...config, body: form}; 
  console.log('log config:', config);
  return fetch(url, config).then((res) => res.json());
 // return fetch(url, config).then((res) => console.log(res));
}

export const postSignatureGetLink = (version, endpoint, data = {}, params = {}, isDynamic = false, endpointsParams) => {
  const configheaders = {
    Authorization: 'Bearer '+sessionStorage.getItem("tokenCertifcate")
  }
  console.log('cek config herdears :',configheaders);

  const config = {
    ...baseConfig[version - 1],
    method: 'post', 
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    data,
    headers: configheaders
   // headers: {Authorization:'Bearer '+ localStorage.getItem("tokenCertificate")}
    // params: data,
  }
  console.log('config :',config);
  return axios(config);
}
export const get = (version, endpoint, data = {}, params = {}, isDynamic = false, endpointsParams) => {
  const config = {
    ...baseConfig[version - 1],
    method: 'get',
    url: isDynamic ? dynamicEndPoints[endpoint](...endpointsParams) : endpoints[endpoint],
    data,
    // params,
  }
  return axios(config);
}

export const getWithAuth = (version, endpoint, auth = {}, data = {}, params = {}) => {
  const config = {
    ...baseConfig[version - 1],
    method: 'get', 
    url: endpoints[endpoint],
    data,
    params,
    auth,
  }
  return axios(config);
}

// Registering interceptors
export const initializeHTTPInterceptors = (store) => {
  // REQUEST INTERCEPTORS
  axios.interceptors.request.use(addDefaultPayloadInterceptor(store), (err) => {
    alert(JSON.stringify(err.data));
    console.log(JSON.stringify(err));
  });
  axios.interceptors.request.use(removeFalsyValues, (err) => {
    alert(JSON.stringify(err.data));
    console.log(JSON.stringify(err));
  });
};

const generateDynamicURL = (endpoint, ...params) => `${endpoints[endpoint]}/${dynamicEndPoints[endpoint](...params)}`

