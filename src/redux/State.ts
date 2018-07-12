import { CountdownsState } from 'src/redux/modules';

// TODO: do a search on how to infer this from reducer or whatever
export type State = {
  countdowns: CountdownsState;
};
