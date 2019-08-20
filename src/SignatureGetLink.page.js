import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import SignatureGetLink, {fields} from './SignatureGetLink.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { signatureGetLink } from './common.thunks';
import {change} from 'redux-form';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    dispatch(signatureGetLink(values, history));
    // dispatch(inquireTransfer(values, history));
  }
  // validate: 
}

const PaymentForm = reduxForm(formConfig)(SignatureGetLink)

class SignatureGetLinkPage extends Component{

  componentDidMount = () => {
    let {jobSignId, jobSignIdUpdate} = this.props;
    console.log('dsd',jobSignId);
    if(!jobSignId){
      jobSignId = localStorage.getItem('job_sign_id');
    }

    jobSignIdUpdate(jobSignId);
  }

  render = () => {
    return (
        <PaymentForm {...this.props} {...this.state}/> 
    );
  }
}

const payState = ({jobSignId}) => ({
 // jobSignId,
})

const payDispatch = (dispatch) => ({
  jobSignIdUpdate: (id) => dispatch(change(fields.formName, fields.job_sign_id, id))
});

const ConnectedMainPaymentPage = connect(payState, payDispatch)(SignatureGetLinkPage);

export default ConnectedMainPaymentPage;