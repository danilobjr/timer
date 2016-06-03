import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, 
    FlexBox, FlexItem,
    NavigationBar 
} from 'components/common';

export class Timer extends Component {
    render() {
        return (
            <FlexBox column>
                <NavigationBar />
                <FlexItem grow={1}>Timer content</FlexItem>
                <CommandBar>
                    <CommandBarItem icon="ion-md-add" />
                    <CommandBarItem icon="ion-md-trash" />
                    <CommandBarItem icon="ion-md-more" />
                </CommandBar>
            </FlexBox>
        );
    }
}