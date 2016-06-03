import React, { Component } from 'react';
import { CommandBarItem } from './CommandBarItem';

export class CommandBar extends Component {
    render() {
        return (
            <div className="command-bar">
                <ul className="list">{this.props.children}</ul>
            </div>
        );
    }
}

const validateChildren = (props, propName, componentName) => {
    const children = props[propName];
    
    if (!children) {
        return new Error(
            "Invalid prop '" + propName + "' supplied to" +
            " '" + componentName + "'. Validation failed. A CommandBar must have children of type CommandBarItem."
        );
    }
    
    const isSomeChildrenNotCommandBarItem = [].concat(children).some(c => c.type !== CommandBarItem);
    
    if (isSomeChildrenNotCommandBarItem) {        
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