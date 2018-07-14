import { compose, range, map, flatten, reverse, replace, padLeft, inc, dec, last } from 'utils';

export const createArrayOfNumbers = (startsWith: number) => compose(range(startsWith), inc);
export const padLeftWithZero = map(compose(replace(' ')('0'), padLeft(2)));
export const rearrangeNumbers = compose(flatten, reverse);

export const select = (array: any[], selected: any, operation: Function) => {
  const indexOfSelected = array.indexOf(selected);

  if (operation === dec && indexOfSelected === 0) {
    return last(array);
  } else if (operation === inc && indexOfSelected + 1 === array.length) {
    return array[0];
  } else {
    return array[operation(indexOfSelected)];
  }
};
