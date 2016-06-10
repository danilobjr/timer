import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, FlexBox, 
    NavigationBar, PageView, PageContent,
    CountdownTimer
} from 'components/common';

export class TimerNewPage extends Component {
    render() {
        return (
            <PageView className="timer-new-page">
                <PageContent grow={1}>
                    <h3>New Timer</h3>
                    <FlexBox wrap justify='center'>
                    </FlexBox>
                </PageContent>
                <CommandBar>
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
            </PageView>
        );
    }
}