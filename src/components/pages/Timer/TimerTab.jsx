import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    FlexBox, FlexItem, Tab, TabContent,
    CommandBar, CommandBarItem 
} from 'components/common';
import { CountdownTimer } from './CountdownTimer';
import { TimerTabCommandBar } from './TimerTabCommandBar';
import { milliseconds } from 'helpers';
import { enableBackButton, disableBackButton, setBackButtonCallback } from 'components/common';
import { removeTimer } from './actions';

class TimerTabComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isEditionModeEnabled: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.timers.length === 0 && this.state.isEditionModeEnabled) {
            this.setState({ isEditionModeEnabled: false });
        }
    }

    render() {
        const timers = this.renderCountdownTimers();

        return (
            <Tab>
                <TabContent>
                    <FlexBox wrap justify='center'>
                        {timers.length ? timers : <p>Click + add a timer</p>}
                    </FlexBox>
                </TabContent>
                <TimerTabCommandBar 
                    isEditionModeEnabled={this.state.isEditionModeEnabled}
                    hideEditButton={timers.length === 0}
                    onClickEdit={this.enableEdition.bind(this)}
                    onClickDone={this.disableEdition.bind(this)} 
                />
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
                        isEditionModeEnabled={this.state.isEditionModeEnabled}
                        onClickRemoveButton={() => this.removeTimer(id)}
                    />;
        });
    }

    enableEdition() {
        this.setState({ isEditionModeEnabled: true });
    }

    disableEdition() {
        this.setState({ isEditionModeEnabled: false });
    }

    removeTimer(id) {
        this.props.removeTimer(id);
    }
}

const mapStateToProps = (state) => ({
    timers: state.timers
});

const mapDispatchToProps = (dispatch) => ({
    removeTimer: (id) => dispatch(removeTimer(id))
})

export const TimerTab = connect(mapStateToProps, mapDispatchToProps)(TimerTabComponent);