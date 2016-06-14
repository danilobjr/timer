import { compose, join, map, padLeft, replace, time } from 'helpers';

export const timeToString = (milliseconds) => compose(join(':'), map(compose(replace(' ')('0'), padLeft(2))), time)(milliseconds)