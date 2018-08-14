export type Chronometer = Pick<Time, 'milliseconds' | 'paused'>;

export type Countdown = {
  alarmSound: boolean;
  startAt: number;
} & Time;

export type Time = {
  id: string;
  name?: string;
  milliseconds: number;
  paused: boolean;
};

export enum TimeInMilliseconds {
  Second = 1000,
  Minute = 60000,
}

export type Toast = {
  id: string,
  message: string;
  show: boolean;
};

export type StringKeyValuePair = { [key: string]: any };
