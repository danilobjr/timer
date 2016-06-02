import React, { Component, PropTypes } from 'react';
import { NavigationBarItem } from './NavigationBarItem';

export class NavigationBar extends Component {    
    render() {
        return (
            <div className="navigation-bar">
                <ul>
                    <NavigationBarItem href="/timer" text="Timer" />
                    <NavigationBarItem href="/chronometer" text="Chronometer" />
                </ul>
            </div>
        );
    }
}
