import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import { RecursiveForm } from './DynamicForm';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const fields = {
  formName: 'SignatureUploadForm',
  certificate_id  : 'certificate_id',
  document_type   : 'document_type',
  document: 'document',
  signature_image : 'signature_image',
  signature_page  : 'signature_page',
  signature_offset_x  : 'signature_offset_x',
  signature_offset_y  : 'signature_offset_y',
  signature_scale : 'signature_scale',
  signature_width : 'signature_width',
  // screen_width    : 'screen_width',
  // pdf_width   : 'pdf_width',
  certificate_password    : 'certificate_password',
  email   : 'email'
}

const signatureStyle = {
  marginBottom :'65px'
};


export default class SignatureUpload extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     [fields.document]: [],
  //     [fields.signature_image]:[],
  //   };
    
  // }

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
    const page = require('./page.config').signatureupload;
    return (
      <div className="center column">
        <Typography variant="h3" component="h3" style={signatureStyle}  gutterBottom>
              Signature Upload
        </Typography>
      <RecursiveForm page={page}/>
      <section className="padding buttonContainer">
        <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Submit'}</Button>
      </section>
    </div>);
  }
}