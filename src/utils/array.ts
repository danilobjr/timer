export const map = <T, R = any>(transform: (item: T, index?: number) => R) => (array: T[]) => {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    result.push(transform(array[index], index));
  }

  return result;
};

export const range = (length: number) =>
  new Array(length)
    .join(',')
    .split(',')
    .map((_, index) => index);

export const splitAt = (atIndex: number) => (array: any[]) =>
  [
    array.slice(0, atIndex),
    array.slice(atIndex),
  ];

export const reverse = (array: any[]) =>
  [...array].reverse();

export const flatten = (array: any[]) =>
  array.reduce((accu, curr) =>
    accu.concat(curr),
    [],
  );

export const last = (array: any[]) =>
  [...array][array.length - 1];

export const all = (predicate: (value: any, index: number, array: any[]) => boolean) => (array: any[]) =>
  array.every(predicate);

export const join = (separator: string) => (array: any[]) =>
  array.join(separator);

export const head = (array: any[]) =>
  [...array].shift();

export const prepend = (value: any) => (array: any) =>
  [value, ...array];

export const zipWith = (func: Function) => (firstArray: any[]) => (secondArray: any[]) => {
  const result = [];
  const smallerArray = firstArray.length < secondArray.length ? firstArray : secondArray;

  for (let i = 0; i < smallerArray.length; i++) {
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

const privateRemove = <T>(predicate: (item: T) => boolean) => (array: T[]) => {
  const index = array.findIndex(predicate);

  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
};

export const removeWhere = <T>(predicate: (item: T) => boolean) => (array: T[]) =>
  privateRemove<T>(predicate)(array);

export const remove = <T>(item: T) => (array: T[]) =>
  privateRemove<T>(a => a === item)(array);

export const replaceAt = <T>(index: number) => (item: T) => (array: T[]) => {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
};

export const updateWhere = <T>(array: T[]) => (findPredicate: (item: T) => boolean) => (updatedItemProps: Partial<T>) => {
  const originalItem = array.find(findPredicate);
  const index = array.findIndex(findPredicate);

  const updated = Object.assign({}, originalItem, updatedItemProps);
  return replaceAt<T>(index)(updated)(array);
};
