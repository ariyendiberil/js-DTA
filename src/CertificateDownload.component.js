import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';
import {forEach, result, map} from 'lodash';
import { renderTextField, chooseFileType, RenderDropZone } from './fields.util';
import Button from '@material-ui/core/Button';
import {change} from 'redux-form';
import Typography from '@material-ui/core/Typography';

export const fields = {
  formName: 'CertificateDownloadForm',
  certificate_id : 'certificate_id'
}

const certificateStyle = {
  marginBottom :'65px'
};

export default class CertificateDownload extends Component{

  render = () => {
    const {handleSubmit} = this.props;
      return (
        <div className="center column">
        <Typography variant="h3" component="h3" style={certificateStyle}  gutterBottom>
              Certificate Download
          </Typography>
          <section className="padding-side"><Field disabled name={fields.certificate_id} placeholder={fields.certificate_id} label={fields.certificate_id} component={renderTextField}/></section>
          <section className="padding buttonContainer">
            <Button type="submit" color='primary' variant='contained' className="formBtn" onClick={handleSubmit}>{'Submit'}</Button>
          </section>
        </div>);
  }
}