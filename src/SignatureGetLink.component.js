import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import Button from '@material-ui/core/Button';
import {change} from 'redux-form';
import Typography from '@material-ui/core/Typography';

export const fields = {
  formName: 'SignatureGetLinkForm',
 // password : 'password'
    job_sign_id : 'job_sign_id'
}

const signatureStyle = {
  marginBottom :'65px'
};

export default class SignatureGetLink extends Component{
  
  render = () => {
    const {handleSubmit} = this.props;
      return (
        <div className="center column">
         <Typography variant="h3" component="h3" style={signatureStyle}  gutterBottom>
              Signature Get Link
          </Typography>
          {/* <section className="padding-side"><Field name={fields.password} placeholder={fields.password} label={fields.password} component={renderTextField}/></section> */}
          <section className="padding-side"><Field disabled name={fields.job_sign_id} placeholder={fields.job_sign_id} label={fields.job_sign_id} component={renderTextField}/></section>
          <section className="padding buttonContainer">
            <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Submit'}</Button>
          </section>
        </div>);
  }
}