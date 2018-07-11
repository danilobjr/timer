import { compose, join, map, padLeft, replace, time } from 'helpers';

export const timeToString = (milliseconds: number) =>
  compose(join(':'), map(compose(replace(' ')('0'), padLeft(2))), time)(milliseconds)

export const padLeftWithZero = (value: number) =>
  compose(replace(' ')('0'), padLeft(2))(value)
