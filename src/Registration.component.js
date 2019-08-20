import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map, filter} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import fs from 'fs';
import { RecursiveForm } from './DynamicForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const fields = {
  formName: 'RegisterForm',
  ktp_image:'ktp_image',
  photo:'photo',
  signature:'signature',
  npwp_image:'npwp_image',
  email:'email',
  password:'password',
  name:'name',
  sex : 'sex',
  dob : 'dob',
  birth_place : 'birth_place',
  ktp_no : 'ktp_no',
  npwp_no : 'npwp_no',
  mobile_phone : 'mobile_phone',
  state : 'state',
  district : 'district',
  sub_district : 'sub_district',
  address : 'address',
  post_code : 'post_code'
}

const registerStyle = {
  marginBottom :'70px'
};


export default class Registration extends Component{
  handleOnDrop = (stateName) => (newImageFile, onChange) => {
    // const imageFile = {
    //   file: newImageFile[0],
    //   name: newImageFile[0].name,
    //   preview: URL.createObjectURL(newImageFile[0]),
    //   size: newImageFile[0].size
    // };
    const imageFile = newImageFile[0];

    this.setState({ [stateName]: [imageFile] }, () => onChange(imageFile));
  };

  
  render = () => {
    const {handleSubmit} = this.props;
    const page = require('./page.config').registration;
      return (
        
          <div className="center column">
           <Typography variant="h3" component="h3" style={registerStyle}  gutterBottom>
              Register
          </Typography>
          <RecursiveForm page={page}/>
          <section className="padding buttonContainer">
          <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Register'}</Button>
          </section>
        </div>
       
        );
  }
}