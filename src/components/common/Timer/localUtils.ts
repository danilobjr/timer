import { compose, join, map, padLeft, replace, time } from 'utils';

export const timeToString = (milliseconds: number) =>
  compose(join(':'), map(padLeftWithZero), time)(milliseconds);

export const padLeftWithZero = (value: number) =>
  compose(replace(/\s/g)('0'), padLeft(2))(value);
