import * as React from 'react';
import { SFC } from 'react';

export const PageHeader: SFC<{}> = ({ children }) => (
  <h3 className="page-header">{children}</h3>
)
