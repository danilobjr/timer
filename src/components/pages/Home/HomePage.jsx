import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, FlexBox, 
    NavigationTabs, PageView, PageContent,
    CountdownTimer
} from 'components/common';

export class HomePage extends Component {
    render() {
        return (
            <PageView>
                <NavigationTabs />
                {/* 
                <PageContent grow={1}>
                    <FlexBox wrap justify='center'>
                        {this.renderCountdownTimers()}
                    </FlexBox>
                </PageContent>
                <CommandBar>
                    <CommandBarItem to="/timer/new" icon="plus" title="New" />
                    <CommandBarItem icon="checklist" title="Edit" />
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
                */}
            </PageView>
        );
    }
}