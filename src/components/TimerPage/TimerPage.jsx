import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, 
    FlexBox, FlexItem,
    NavigationBar,
    Timer
} from 'components/common';

export class TimerPage extends Component {
    render() {
        // back use for FlexBox n FlexItem when done with new Timer/Counter component
        return (
            <div>
                <NavigationBar />
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '12px'}}>
                    <Timer />
                </div>
                <CommandBar>
                    <CommandBarItem icon="ion-md-add" />
                    <CommandBarItem icon="ion-md-trash" />
                    <CommandBarItem icon="ion-md-more" />
                </CommandBar>
            </div>
        );
    }
}