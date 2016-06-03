import React, { Component } from 'react';
import { CommandBar, CommandBarItem, NavigationBar } from 'components/common';

export class Timer extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div>Timer content</div>
                <CommandBar>
                    <CommandBarItem icon="ion-md-add" />
                    <CommandBarItem icon="ion-md-trash" />
                    <CommandBarItem icon="ion-md-more" />
                </CommandBar>
            </div>
        );
    }
}