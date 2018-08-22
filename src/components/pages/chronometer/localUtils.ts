import { compose, subtract, head, last, map, reverse, aperture, zipWith } from 'utils';

const subtractItems = (items: any[]) => subtract(head(items))(last(items));

const mapResult = (total: any, partial: any) => ({ total, partial });

export const differenceBetweenResults = compose(map(compose(subtractItems, reverse)), aperture(2));

export const mapResults = zipWith(mapResult);
