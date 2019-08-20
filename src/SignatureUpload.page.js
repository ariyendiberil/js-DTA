import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import SignatureUpload, {fields} from './SignatureUpload.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { signatureUpload } from './common.thunks';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    dispatch(signatureUpload(values, history));
    // dispatch(inquireTransfer(values, history));
  }
  // validate: 
}

const PaymentForm = reduxForm(formConfig)(SignatureUpload)

class SignatureUploadPage extends Component{
  render = () => {
    return (
        <PaymentForm {...this.props} {...this.state}/> 
    );
  }
}

const payState = ({billerList}) => ({
  billerList,
})

const payDispatch = (dispatch) => ({
});

const ConnectedMainPaymentPage = connect(payState, payDispatch)(SignatureUploadPage);

export default ConnectedMainPaymentPage;