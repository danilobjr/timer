import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, NavigationBar, 
    PageView, PageHeader, PageContent,
    FieldText, TimeSelector
} from 'components/common';

export class TimerNewPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: 'Timer',
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    render() {
        const { name, hours, minutes, seconds } = this.state;

        return (
            <PageView className="timer-new-page">
                <PageContent grow={1}>
                    <PageHeader>New Timer</PageHeader>
                    <div className="field">
                        <TimeSelector
                            hours={hours} 
                            minutes={minutes} 
                            seconds={seconds} 
                            onChange={(value) => this.updateTime(value)} 
                        />
                    </div>

                    <FieldText 
                        label="Timer name" 
                        value={name} 
                        onChange={(value) => this.updateName(value)} 
                    />
                </PageContent>
                <CommandBar>
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
            </PageView>
        );
    }

    updateTime(value) {
        const newState = Object.assign({}, this.state, value);
        this.setState(newState);
    }

    updateName(value) {
        const newState = Object.assign({}, this.state, { name: value });
        this.setState(newState);
    }
}