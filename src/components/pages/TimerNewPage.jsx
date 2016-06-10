import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, NavigationBar, 
    PageView, PageHeader, PageContent
    //FlexBox,
} from 'components/common';

export class TimerNewPage extends Component {
    render() {
        return (
            <PageView className="timer-new-page">
                <PageContent grow={1}>
                    <PageHeader>New Timer</PageHeader>
                    {/*
                    <FlexBox wrap justify='center'>
                    </FlexBox>
                    */}
                </PageContent>
                <CommandBar>
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
            </PageView>
        );
    }
}