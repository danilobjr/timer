import * as React from 'react';
import { compose, range, map, flatten, reverse, replace, padLeft, inc, dec, last } from 'helpers';

export const createArrayOfNumbersOf = (startsWith) => compose(range(startsWith), inc);
export const formatNumbers = map(compose(replace(' ')('0'), padLeft(2)));
export const rearrangeNumbers = compose(flatten, reverse);
export const toListItem = map(n => <li key={n} className="number">{n}</li>);

export const select = (array, selected, operation) => {
    const indexOfSelected = array.indexOf(selected);

    if (operation === dec && indexOfSelected === 0) {
        return last(array);
    } else if (operation === inc && indexOfSelected + 1 === array.length) {
        return array[0];
    } else {
        return array[operation(indexOfSelected)];
    }
}