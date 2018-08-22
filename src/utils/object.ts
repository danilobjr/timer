import { StringKeyValuePair } from 'models';

export const values = (object: StringKeyValuePair) =>
  Object.values(object);

export const omit = (props: string[]) => (object: StringKeyValuePair) => {
  const result: StringKeyValuePair = {};

  for (let key in object) {
    if (!props.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
};
