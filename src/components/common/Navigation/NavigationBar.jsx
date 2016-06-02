import React, { Component, PropTypes } from 'react';
import { NavigationBarItem } from './NavigationBarItem';

export class NavigationBar extends Component {    
    render() {
        return (
            <div className="command-bar">
                <ul>
                    <NavigationBarItem text="Timer" />
                    <NavigationBarItem text="Chronometer" />
                </ul>
            </div>
        );
    }
}
