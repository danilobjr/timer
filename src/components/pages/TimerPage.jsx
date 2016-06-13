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
                <PageContent grow={1}>
                    <FlexBox wrap justify='center'>
                        <CountdownTimer name="My interval" time={5000} />
                        <CountdownTimer name="Time to lunch" time={720000} />
                    </FlexBox>
                </PageContent>
                <CommandBar>
                    <CommandBarItem to="/timer/new" icon="plus" title="New" />
                    <CommandBarItem icon="checklist" title="Edit" />
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
            </PageView>
        );
    }
}