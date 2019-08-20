import * as api from "./api.util";
import fs from 'fs';
import { endpoints } from "./connect.constant";
import { saveCertificateId } from "./actions";

// export const register = (values, history) => (dispatch) => {
export const register = ({...values}, history) => (dispatch) => {
  const {ktp_image, photo, signature, npwp_image, ...otherValues} = values;
  let formData = new FormData();
  formData.append('ktp_image', ktp_image);
  formData.append('photo', photo);
  formData.append('signature', signature);
  formData.append('npwp_image', npwp_image);
  console.log('ress :', values);
  return api.register(formData, values).then((res) => {
    // const {result = {}} = data;
    // dispatch(inquireTransferData({...result}));
    // goTo(history, PERSONALROUTE.DASHBOARD.TRANSFER.CONFIRM);
    console.log('login res', res);
    if (res.status == 'OK') {
        alert('Register berhasil');
        dispatch(saveCertificateId(values.email));
        history.push(endpoints.LOGIN);
      } else if(res.status == 'ERROR') {
        var tes = "";

      for (var prop in res.message) {
        var item = res.message[prop];
  
        console.log("1 : " + prop);
  
        tes +="            "+prop + " : " + item + "\n";
      }
        alert("Message : \n"+tes+"\nregister gagal, silahkan registrasi kembali");
        history.push(endpoints.REGISTER);
    } 
}).catch((error) => {
  alert('connection timeout, Silahkan cek koneksi internet ');
});
}

export const login = (values, history) => (dispatch) => {
  return api.login(values).then((res) => {
    console.log('login res', res);
    console.log('status',res.status);
    if (res.data.status == 'OK') {
      sessionStorage.setItem("tokenCertifcate",res.data.data.token);
    //  sessionStorage.setItem('sessionToken',res.data.data.token);
      alert('login sukses');
      history.push(endpoints.CERTIFICATE_REQUEST);    
    } else if(res.data.status == 'ERROR') {
      var tes = "";
      for (var prop in res.data.message) {
        var item = res.data.message[prop];
        console.log("1 : " + prop);
        tes +="            "+prop + " : " + item + "\n";
      }
      alert("Message : \n"+tes+"\nlogin gagal, silahkan login kembali");
      history.push(endpoints.LOGIN);
    }
  }).catch((error) => {
    alert('connection timeout, Silahkan cek koneksi internet ');
  });
}

export const requestCertificate = (values, history) => (dispatch) => {
//  const key = 'requestCertificate';
//  return genericAPIHandler(key, values).then((res) => console.log('res', key, res));
  return api.requestCertificate(values).then((res)=>{
    console.log('certificate request ',res);
    if (res.data.status == 'OK') {
      alert('certificate request :'+res.data.data.certificate_id);
      localStorage.setItem("certificate_id",res.data.data.certificate_id);
      history.push(endpoints.CERTIFICATE_DOWNLOAD);
    } else if (res.data.status == 'ERROR') {
      if (res.data.code == 'UNAUTHENTICATED') {
          alert('Message :'+res.data.message+'\nSilahkan login kembali ');
          history.push(endpoints.LOGIN);
      }else if(res.data.status !== 'UNATHENTICATED'){
        var tes = "";
        for (var prop in res.data.message) {
          var item = res.data.message[prop];
          console.log("1 : " + prop);
          tes +="             "+prop + " : " + item + "\n";
        }
        alert("Message : \n"+tes+"\ncertificate request gagal, silahkan isi password kembali");
        history.push(endpoints.CERTIFICATE_REQUEST); 
      }
      
    }
    
  }).catch((error) => {
    alert('connection timeout, Silahkan cek koneksi internet ');
  });
}

export const certificateDownload = (values, history) => (dispatch) => {
  // const key = 'certificateDownload';
  // return genericAPIHandler(key, values).then((res) => console.log('res', key, res));
  console.log('cek value :',values);
  return api.certificateDownload(values).then((res)=>{
    console.log('certificate download ', res);
    if (res.data.status == 'OK') {
      alert('Status :'+res.data.data.status);
      dispatch(saveCertificateId(res.data.data.certificate));
      history.push(endpoints.SIGNATURE_UPLOAD);
    } else if (res.data.status == 'ERROR') {
      if (res.data.code == 'UNAUTHENTICATED') {
        alert('Message :'+res.data.message+'\nSilahkan login kembali ');
        history.push(endpoints.LOGIN);
      }else if(res.data.status !== 'UNATHENTICATED'){
      alert('Message :'+res.data.message.certificate_id+'\nSilahkan login kembali');
      history.push(endpoints.LOGIN);
    }
  }
  }).catch((error) => {
    alert('connection timeout, Silahkan cek koneksi internet ');
  });
}

export const signatureUpload = ({...values}, history) => (dispatch) => {
  const {signature_image, document, ...otherValues} = values;
  let formData = new FormData();
  formData.append('document', document);
  formData.append('signature_image', signature_image);
 
  return api.signatureUpload(formData, values).then((res)=>{
    console.log('cek ',res);
    //!res && history.push(endpoints.LOGIN);
    if (res.status == "OK") {
      console.log('signature upload',res);
      alert('job sign id :'+res.data.job_sign_id);
      // dispatch(saveCertificateId(res.data.job_sign_id));
      localStorage.setItem("job_sign_id",res.data.job_sign_id);
      history.push(endpoints.GET_SIGNATURE_LINK);  
    }else if(res.status == "ERROR"){
      
      var tes = "";
      for (var prop in res.message) {
        var item = res.message[prop];
  
        console.log("1 : " + prop);
  
        tes +="                        "+prop + " : " + item + "\n";
      }
      alert("Message : \n"+tes+"\nSilahkan upload signature kembali!");
      history.push(endpoints.SIGNATURE_UPLOAD);
    }
    
  }).catch((error) => {
    alert('connection timeout, Silahkan cek koneksi internet ');
  });
}

export const signatureGetLink = (values, history) => dispatch => {
  // const key = 'certificateDownload';
  // return genericAPIHandler(key, values).then((res) => console.log('res', key, res));
  console.log('cek value :',values);
  return api.getSignatureLink(values).then((res)=>{
    console.log('signaturegetlink ', res);
    //console.log('file download ',res.data.data.signed_file);
    if (res.data.status == 'OK') {
      console.log('cek :',res.data.status);
      alert('Status : '+res.data.data.status+'\nFile akan terdownload otomatis ketika anda submit');
      window.location = res.data.data.signed_file;
      localStorage.clear();
      sessionStorage.clear();
    } else if(res.data.status == 'ERROR') {
      if (res.data.code == 'UNAUTHENTICATED') {
        alert('Message :'+res.data.message+'\nSilahkan login kembali ');
        history.push(endpoints.LOGIN);
      }else if(res.data.status !== 'UNATHENTICATED'){
        alert('Message :'+res.data.message.job_sign_id+'\nSilahkan upload signature kembali');
        history.push(endpoints.SIGNATURE_UPLOAD);
    }
    }
   //dispatch(saveCertificateId(res.data.data.signed_file));
   
  }).catch((error) => {
    alert('connection timeout, Silahkan cek koneksi internet ');
  });
}

const genericAPIHandler = (key, ...params) => {
  if (api[key]) return api[key](...params).then((res) => {
    return Promise.resolve(res);
  }).catch((err) => {throw JSON.stringify(err)})
}

export const apiHandler = (key, params = {}) => (dispatch) => {
  if (api[key]) return api[key](params).then((res) => {
    return Promise.resolve(res);
  }).catch((err) => {throw JSON.stringify(err)})
  
  throw "function not found";;
}