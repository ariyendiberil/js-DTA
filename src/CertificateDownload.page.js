import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import CertificateDownload, {fields} from './CertificateDownload.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { certificateDownload } from './common.thunks';
import {change} from 'redux-form';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    dispatch(certificateDownload(values, history));
    // dispatch(inquireTransfer(values, history));
  }
  // validate: 
}

const PaymentForm = reduxForm(formConfig)(CertificateDownload)

class CertificateDownloadPage extends Component{

  componentDidMount = () => {
    let {certificate, certificateUpdate} = this.props;
    console.log(certificate);
    if(!certificate){
      certificate = localStorage.getItem('certificate_id');
    }

    certificateUpdate(certificate);
  }

  render = () => {
    return (
        <PaymentForm {...this.props} {...this.state}/> 
    );
  }
}

const payState = ({certificate}) => ({
  certificate
})

const payDispatch = (dispatch) => ({
  certificateUpdate: (id) => dispatch(change(fields.formName, fields.certificate_id, id))
});


const ConnectedMainPaymentPage = connect(payState, payDispatch)(CertificateDownloadPage);

export default ConnectedMainPaymentPage;