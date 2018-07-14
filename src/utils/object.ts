import { StringKeyValuePair } from 'models';

export const values = (object: StringKeyValuePair) => {
  const result = [];

  for (let key in object) {
    result.push(object[key]);
  }

  return result;
};

export const omit = (props: string[]) => (object: StringKeyValuePair) => {
  const result: StringKeyValuePair = {};

  for (let key in object) {
    if (!props.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
};
