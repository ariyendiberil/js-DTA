import React, {Component} from 'react';
import {
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fakeAuth from './routes';
import { endpoints } from './connect.constant';


export const fields = {
  formName: 'CertificateRequestForm',
  password : 'password'
}

const certificateStyle = {
  marginBottom :'60px'
};

export default class CertificateRequest extends Component{





  render = () => {
   
    const {handleSubmit} = this.props;
      return (
        <div className="center column">
        <Typography variant="h3" component="h3" style={certificateStyle}  gutterBottom>
              Certificate Request
          </Typography>
          <section className="padding-side"><Field type={fields.password} name={fields.password} placeholder={fields.password} label={fields.password} component={renderTextField}/></section>
          <section className="padding buttonContainer">
            <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Submit'}</Button>
          </section>
        </div>
        );
  }
}