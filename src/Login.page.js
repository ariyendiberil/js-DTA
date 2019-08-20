import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {result, find} from 'lodash';
import Login, {fields} from './Login.component';
// import { inquireTransfer } from '../../thunks/transfer.thunks';
// import { PERSONALURLMAP } from '../../util/constant/urlMapping.constant';
// import { PERSONALROUTE } from '../../util/constant/routes.constant';
import {Redirect} from 'react-router-dom';
import { login } from './common.thunks';
import {change} from 'redux-form';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, {history}) => {
    dispatch(login(values, history));
  }
  // validate: 
}

const PaymentForm = reduxForm(formConfig)(Login)

class LoginPage extends Component{
  componentDidMount = () => {
    const {email, emailUpdate} = this.props;
    emailUpdate(email);
  }
  render = () => {
    return (
        <PaymentForm {...this.props} {...this.state}/> 
    );
  }
}

const payState = ({email}) => ({
  email
})

const payDispatch = (dispatch) => ({
  emailUpdate: (id) => dispatch(change(fields.formName, fields.email, id))
});


const ConnectedMainPaymentPage = connect(payState, payDispatch)(LoginPage);

export default ConnectedMainPaymentPage;