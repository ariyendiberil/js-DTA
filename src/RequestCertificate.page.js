import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import CertificateRequest, {fields} from './RequestCertificate.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { requestCertificate } from './common.thunks';


const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    dispatch(requestCertificate(values, history));
    // dispatch(inquireTransfer(values, history));
  }
  // validate: 
}



const PaymentForm = reduxForm(formConfig)(CertificateRequest)

class CertificateRequestPage extends Component{
  


  render = () => {
    return (
        <PaymentForm {...this.props} {...this.state}/> 
    );
  }
}

const payState = ({certificate}) => ({
  
})

const payDispatch = (dispatch) => ({
  
});

const ConnectedMainPaymentPage = connect(payState, payDispatch)(CertificateRequestPage);

export default ConnectedMainPaymentPage;