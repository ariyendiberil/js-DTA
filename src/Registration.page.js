import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import Registration, {fields} from './Registration.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { register } from './common.thunks';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    console.log('values', values);
    dispatch(register(values, history));
    // dispatch(inquireTransfer(values, history));
  }
  // validate: 
}

const PaymentForm = reduxForm(formConfig)(Registration)

class RegistrationPage extends Component{
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

const ConnectedMainPaymentPage = connect(payState, payDispatch)(RegistrationPage);

export default ConnectedMainPaymentPage;