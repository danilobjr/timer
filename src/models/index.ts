export type Countdown = {
  startAt: number;
} & Time;

export type Time = {
  id: string;
  name?: string;
  expanded: boolean;
  milliseconds: number;
  paused: boolean;
};

export enum TimeInMilliseconds {
  Second = 1000,
  Minute = 60000,
}

export type StringKeyValuePair = { [key: string]: any };
