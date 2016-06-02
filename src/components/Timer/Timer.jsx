import React, { Component } from 'react';
import { NavigationBar } from 'components/common';

export class Timer extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div>content here</div>
                {/*<CommandBar />*/}
            </div>
        );
    }
}