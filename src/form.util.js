import { toPromise, wrapMethodInFunction } from "./common.util";

export const handleOnDrop = (setState) => (newImageFile, onChange) => {
  // const imageFile = {
  //   file: newImageFile[0],
  //   name: newImageFile[0].name,
  //   preview: URL.createObjectURL(newImageFile[0]),
  //   size: newImageFile[0].size
  // };
  const imageFile = newImageFile[0];
  setState([imageFile]);
  console.log('imageFIle', imageFile, onChange);
  onChange(imageFile);
  // toPromise(setState, [imageFile]).then(wrapMethodInFunction(onChange, imageFile));
};

