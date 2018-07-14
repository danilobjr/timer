export const map = (func: Function) => (array: any[]) => array.reduce((accu, curr) => accu.concat(func(curr)), []);

export const range = (from: number) => (to: number) => new Array(to).join(',').split(',').map((item, index) => index);

export const splitAt = (atIndex: number) => (array: any[]) => [array.slice(0, atIndex), array.slice(atIndex)];

export const reverse = (array: any[]) => [...array].reverse();

export const flatten = (array: any[]) => array.reduce((accu, curr) => accu.concat(curr), []);

export const last = (array: any[]) => [...array][array.length - 1];

export const all = (predicate: (value: any, index: number, array: any[]) => boolean) => (array: any[]) =>
  array.every(predicate);

export const join = (separator: string) => (array: any[]) => array.join(separator);

export const head = (array: any[]) => [...array].shift();

export const prepend = (value: any) => (array: any) => [value, ...array];

export const zipWith = (func: Function) => (firstArray: any[]) => (secondArray: any[]) => {
  const result = [];

  for (let i = 0; i < firstArray.length; i++) {
    result.push(func(firstArray[i], secondArray[i]));
  }

  return result;
};

export const aperture = (howMany: number) => (array: any[]) => {
  const result = [];

  for (let i = 0; i <= array.length - howMany; i++) {
    result.push([...array].splice(i, howMany));
  }

  return result;
};

export const remove = <T>(item: T) => (array: T[]) => {
  const index = array.findIndex(a => a === item);

  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
};

export const updateAt = <T>(index: number) => (item: T) => (array: T[]) => {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
};
