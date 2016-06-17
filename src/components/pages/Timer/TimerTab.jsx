import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    FlexBox, FlexItem, Tab, TabContent,
    CommandBar, CommandBarItem, 
    CountdownTimer
} from 'components/common';
import { milliseconds } from 'helpers';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';

class TimerTabComponent extends Component {
    render() {
        return (
            <Tab>
                <TabContent>
                    <FlexBox wrap justify='center'>
                        {this.renderCountdownTimers()}
                    </FlexBox>
                </TabContent>
                <CommandBar>
                    <CommandBarItem to="/timer/new" icon="plus" title="New" />
                    <CommandBarItem icon="checklist" title="Edit" />
                    <CommandBarItem icon="moreHorizontal" title="More" />
                </CommandBar>
            </Tab>
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

export const TimerTab = connect(mapStateToProps, mapDispatchToProps)(TimerTabComponent);