import { Action, BaseActionCreator } from 'redux-act';

export const createActionDescription = (moduleName: string) => (name: string) =>
  `${moduleName}/${name}`;

export const hasSameActionType = <P, M, T>(action: Action<P, M>, actionCreator: BaseActionCreator<T>) => (
  action.type.includes(actionCreator.getType())
);
