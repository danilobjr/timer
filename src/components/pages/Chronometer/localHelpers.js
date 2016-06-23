import { compose, subtract, head, last,
    prepend, map, reverse, aperture, zipWith } from 'helpers';

const subtractItems = item => subtract(head(item))(last(item))
export const differenceBetweenResults = compose(map(compose(subtractItems, reverse)), aperture(2))

const mapResult = (total, partial) => ({ total, partial })
export const mapResults = zipWith(mapResult)