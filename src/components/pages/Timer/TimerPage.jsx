import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    CommandBar, CommandBarItem, FlexBox, 
    NavigationBar, PageView, PageContent,
    CountdownTimer
} from 'components/common';
import { milliseconds } from 'helpers';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';

class TimerPageComponent extends Component {
    render() {
        return (
            <PageView className="timer-page">
                <NavigationBar />
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
            </PageView>
        );
    }

    renderCountdownTimers() {
        return this.props.timers.map(timer => {
            const { id, name, hours, minutes, seconds } = timer;
            return <CountdownTimer 
                        key={id} 
                        name={name} 
                        time={milliseconds(hours, minutes, seconds)} 
                        onExpand={(timer) => this.onTimerExpanded(timer)}
                        onShrink={(timer) => this.onTimerShrunken(timer)}
                    />;
        });
    }

    onTimerExpanded(timer) {
        this.props.setBackButtonCallback(() => timer.shrink());
        this.props.enableBackButton();
    }

    onTimerShrunken(timer) {
        this.props.disableBackButton();
    }
}

const mapStateToProps = (state) => ({
    timers: state.timers
});

const mapDispatchToProps = (dispatch) => ({
    enableBackButton: () => dispatch(enableBackButton()),
    disableBackButton: () => dispatch(disableBackButton()),
    setBackButtonCallback: (callback) => dispatch(setBackButtonCallback(callback))
})

export const TimerPage = connect(mapStateToProps, mapDispatchToProps)(TimerPageComponent);