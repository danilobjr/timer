import React, { Component } from 'react';
import { NavigationBar } from 'components/common';

export class Chronometer extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div>Chronometer content</div>
            </div>            
        );
    }
}