import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const fields = {
  formName: 'LoginForm',
  email : 'email',
  password : 'password'
}

const loginStyle = {
  marginBottom :'50px'
};

export default class Login extends Component{
  render = () => {
    const {handleSubmit} = this.props;
      return (
        <div className="center column" >
        <Typography variant="h3" component="h3" style={loginStyle}  gutterBottom>
              Login
          </Typography>
        
          <section className="padding-side"><Field name={fields.email} placeholder={fields.email} label={fields.email} component={renderTextField} /></section>
          <section className="padding-side"><Field name={fields.password} type={fields.password } placeholder={fields.password} label={fields.password} component={renderTextField} /></section>
          <section className="padding buttonContainer">
            <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Login'}</Button>
          </section>
        </div>);
  }
}