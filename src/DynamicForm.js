import React, { useEffect, useState } from 'react';
import map from 'lodash/map';
import {Field} from 'redux-form';
import * as fields from './fields.util';
import { setValue } from './common.util';
import forEach from 'lodash/forEach';
import { handleOnDrop } from './form.util';

export const RecursiveForm = ({page, state}) => {
  const {header, footer, ...form} = page;
  return (
    <div className="center column">
      {header}
      {
        map(form, (props, key) => {
          return (
            <RecursiveField {...props} state={state} name={key}/>
          )
        })
      }
      {footer}
    </div>
  )
}

const RecursiveField = ({sectionClass = 'padding-side', ...props}) => {
  const {component} = props;
  const [state, setState] = useState([]);
  const handleUpload = handleOnDrop(setState);
  return (
    <section className={sectionClass}>
      <Field 
        {...props} 
        // placeholder={language[placeholder]}
        // label={language[label]}
        component={setValue(fields[component], fields.renderTextField)}
        imagefile={state}
        handleOnDrop={handleUpload}
      />
    </section>
  )
}



