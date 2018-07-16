import { CountdownsState } from 'src/redux/modules/countdowns';
import { ChronometerState } from 'src/redux/modules/chronometer';

// TODO: do a search on how to infer this from reducer or whatever
export type State = Readonly<CountdownsState & ChronometerState>;
