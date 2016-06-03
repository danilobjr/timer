import React, { Component } from 'react';
import { CommandBar, NavigationBar } from 'components/common';

export class Timer extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div>Timer content</div>
                <CommandBar />
            </div>
        );
    }
}