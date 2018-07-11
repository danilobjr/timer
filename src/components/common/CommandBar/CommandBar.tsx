import * as React from 'react'
import { SFC } from 'react'
import { CommandBarItem } from './CommandBarItem'
import { flatten } from 'helpers'

export const CommandBar: SFC<{}> = ({ children }) => (
  <div className="command-bar">{children}</div>
)

// const validateChildren = (props: any, propName: any, componentName: any) => {
//   const children = flatten(props[propName]);

//   if (!children) {
//     return new Error(
//       "Invalid prop '" + propName + "' supplied to" +
//       " '" + componentName + "'. Validation failed. A CommandBar must have children of type CommandBarItem."
//     );
//   }

//   const isSomeChildrenNotTypeOfCommandBarItem = children.some(c => c.type !== CommandBarItem);

//   if (isSomeChildrenNotTypeOfCommandBarItem) {
//     return new Error(
//       "Invalid prop '" + propName + "' supplied to" +
//       " '" + componentName + "'. Validation failed. All children must be of type CommandBarItem."
//     );
//   }

//   return null;
// }

// CommandBar.propTypes = {
//   children: validateChildren
// };
