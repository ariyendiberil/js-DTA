export const endpoints = {
  REGISTER: '/user/register',
  LOGIN: '/user/login',
  SIGNATURE_UPLOAD: '/signature/upload',
  CERTIFICATE_REQUEST: '/certificate/request',
  CERTIFICATE_DOWNLOAD: '/certificate/download',
  GET_SIGNATURE_LINK: '/signature/get-link',
  GET_STATES: '/wilayah/get-states',
  GET_DISTRICT: '/wilayah/get-districts',
  GET_SUB_DISTRICT: '/wilayah/get-subdistricts',
}

export const dynamicEndPoints = {
  // GET_SIGNATURE_LINK: (id) => `${endpoints.GET_SIGNATURE_LINK}/${id}`,
  CERTIFICATE_DOWNLOAD: (id) => `${endpoints.CERTIFICATE_DOWNLOAD}/${id}`,
  GET_DISTRICT: (state_id) => `${endpoints.GET_DISTRICT}/${state_id}`,
  GET_SUB_DISTRICT: (state_id, district_id) => `${endpoints.GET_SUB_DISTRICT}/${state_id}/${district_id}`,
}