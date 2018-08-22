import * as React from 'react';
import { SFC } from 'react';

export const CommandBar: SFC<{}> = ({ children }) => (
  <div className="command-bar">{children}</div>
);
