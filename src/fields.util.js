import React from 'react';
import TextField from "@material-ui/core/TextField";
import {InputLabel, FormControl, Select, MenuItem, Input, FormControlLabel, FormHelperText, withStyles, Typography, Icon, ListItem} from '@material-ui/core/';
import noop from 'lodash/noop';
import DropZone from "react-dropzone";

export const renderTextField = ({
  input,
  meta: { touched, error },
  ...custom
}) => (<div>
        <TextField
          error={touched && error}
          {...input}
          {...custom}
          />
        {
        (touched && error) && 
        <FormHelperText 
          // style={style.textError}
        >
          {error}
        </FormHelperText>
        }
    </div>)

// export const chooseFileType = ({label, input, ...props}) => {
//   return (
//     <section>
//       <label className="column">{label}</label> 
//       <input {...input} {...props} type="file" onChange={onChange(input)}/>
//     </section>

//   );
// }

export const RenderDropZone = (props) => {
  const {
    handleOnDrop,
    input: {onChange},
    imagefile,
    meta: { error, touched },
    accept,
    label,
    placeholder
  } = props;
  return (
  <div className="preview-container">
    <DropZone
      accept={accept}
      className="upload-container"
      onDrop={file => handleOnDrop(file, onChange)}
      multiple={false}
    >
      {props => {
      return (<div>
        <section className="center">{label}</section>
      {
        imagefile && imagefile.length > 0 ? (
          <ImagePreview imagefile={imagefile} />
        ) : (
          <Placeholder {...props} placeholder={placeholder} error={error} touched={touched} />
        )
      }</div>); 
      }
    }</DropZone>
    <FormHelperText 
      // style={style.textError}
    >
      {error}
    </FormHelperText>
  </div>
)};

const ImagePreview = ({ imagefile }) =>{
  return imagefile.map((file) => {
    const {name, size} = file;
    const preview = URL.createObjectURL(file)
    return (
    <div key={name} className="render-preview">
      <div className="image-container">
        <img src={preview} alt={name} />
      </div>
      <div className="details">
        {name} - {(size / 1024000).toFixed(2)}MB
      </div>
    </div>
  )});
};

  const Placeholder = ({ getInputProps, getRootProps, error, touched , placeholder}) => {
    const props = getInputProps();
  return (
    <div
      {...getRootProps()}
      className={`placeholder-preview ${error && touched ? "has-error" : ""}`}
    >
      <input {...props} />
      {placeholder ? <p>{placeholder}</p> : <p>Click or drag image file to this area to upload.</p>}
    </div>
  )};

export {RenderDropZone as upload};
export {renderTextField as input};