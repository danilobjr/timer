import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    CommandBar, CommandBarItem, NavigationBar, 
    PageView, PageHeader, PageContent,
    FieldText, TimeSelector
} from 'components/common';
import { compose, omit, values, all, equals, not } from 'helpers';
import { createTimer } from './actions';
import { Animation, enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';

class TimerNewPageComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: 'Timer',
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillMount() {
        const { enableBackButton, setBackButtonCallback, history } = this.props;

        enableBackButton();
        setBackButtonCallback(() => history.goBack());
    }

    componentWillUnmount() {
        this.props.disableBackButton();
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
                    <CommandBarItem icon="floppy" title="Save" disabled={!this.isTimeSet()} onClick={this.createNewTimer.bind(this)} />
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

    createNewTimer() {
        this.props.createTimer(this.state);
    }

    isTimeSet() {
        return compose(
            not,
            all(equals(0)),
            values, 
            omit(['name'])
        )(this.state);
    }
}

const mapDispatchToProps = (dispatch) => ({
    createTimer: (data) => dispatch(createTimer(data)),
    enableBackButton: () => dispatch(enableBackButton()),
    disableBackButton: () => dispatch(disableBackButton()),
    setBackButtonCallback: (callback) => dispatch(setBackButtonCallback(callback))
})

export const TimerNewPage = connect(null, mapDispatchToProps)(TimerNewPageComponent);