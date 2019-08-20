import { posts as post, postWithAuth, get, getWithAuth, postMultiPart, postsCertificate, postsCertificateDownload, postMultiPartSignature, postSignatureGetLink} from "./connect.util";
import { isEmptyOrNull } from "./common.util";

// export const login = (payload = {}, data = {}) => isEmptyOrNull(payload) ? post('LOGIN', data) : postWithAuth('LOGIN', payload);
export const register = (formData, payload) => postMultiPart(1, 'REGISTER', formData, payload);

//export const login = (payload) => postMultiPart(1, 'LOGIN', payload);
export const login = (payload) => post(1, 'LOGIN', payload);

export const getStates = () => get(1, 'GET_STATES');

export const requestCertificate = (payload) => postsCertificate(1, 'CERTIFICATE_REQUEST', payload);

export const certificateDownload = (payload) => postsCertificateDownload(1, 'CERTIFICATE_DOWNLOAD', payload);

export const signatureUpload = (formData, payload) => postMultiPartSignature(1, 'SIGNATURE_UPLOAD',formData, payload);

export const getSignatureLink = (payload) => postSignatureGetLink(1, 'GET_SIGNATURE_LINK', payload);