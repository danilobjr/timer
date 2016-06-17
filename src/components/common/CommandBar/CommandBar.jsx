import React, { Component } from 'react';
import { CommandBarItem } from './CommandBarItem';
import { flatten } from 'helpers';

export class CommandBar extends Component {
    render() {
        return <div className="command-bar">{this.props.children}</div>;
    }
}

const validateChildren = (props, propName, componentName) => {
    const children = flatten(props[propName]);
    
    if (!children) {
        return new Error(
            "Invalid prop '" + propName + "' supplied to" +
            " '" + componentName + "'. Validation failed. A CommandBar must have children of type CommandBarItem."
        );
    }
    
    const isSomeChildrenNotTypeOfCommandBarItem = children.some(c => c.type !== CommandBarItem);
    
    if (isSomeChildrenNotTypeOfCommandBarItem) {        
        return new Error(
            "Invalid prop '" + propName + "' supplied to" +
            " '" + componentName + "'. Validation failed. All children must be of type CommandBarItem."
        );
    }
    
    return null;
}

CommandBar.propTypes = {
    children: validateChildren
};