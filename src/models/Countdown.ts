import { Timer } from './Timer';

export type Countdown = {
  /** Start time in milliseconds */
  startTime: number;
} & Timer;
