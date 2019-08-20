import forEach from 'lodash/forEach';

export const getProperties = (object = {}, keysToGet = []) => {
  let retObject = {};
  forEach(keysToGet, (keyName) => {
    if(object[keyName] !== undefined) retObject = {...retObject, [keyName]: object[keyName]};
  })
  return retObject;
}

export const wrapMethodInFunction = (func, ...params) => () => func(...params);

export const toPromise = (func, ...params) => {
  const retVal = func(params);
  return Promise.resolve(retVal);
}

export const setValue = (value, defaults) => value ? value : defaults;