import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, FlexBox, 
    NavigationBar, PageView, PageContent,
    CountdownTimer
} from 'components/common';

export class TimerPage extends Component {
    render() {
        return (
            <PageView className="timer-page">
                <NavigationBar />
                <PageContent className="timers-list" grow={1}>
                    <FlexBox wrap justify='center'>
                        <CountdownTimer name="My interval" time={5000} />
                        <CountdownTimer name="Time to lunch" time={720000} />
                    </FlexBox>
                </PageContent>
                <CommandBar>
                    <CommandBarItem icon="ion-md-add" title="New" />
                    <CommandBarItem icon="ion-md-trash" title="Remove" />
                    <CommandBarItem icon="ion-md-more" title="More" />
                </CommandBar>
            </PageView>
        );
    }
}