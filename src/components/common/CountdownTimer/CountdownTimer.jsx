import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { CountdownWatch } from './CountdownWatch';
import { StartPauseButton } from './StartPauseButton';
import { CountdownTimerCommands } from './CountdownTimerCommands';
import { turnOnLightTheme, turnOffLightTheme } from './actions';
import { notify } from 'native';
import { timeToString } from './localHelpers';
import { Timer } from './Timer';
import { WatchCommandButton } from './WatchCommandButton';

export class CountdownTimer extends BaseComponent {
    constructor(props) {
        super(props);
    
        this.state = {
            hideResetButton: true
        };
    }
    
    render() {
        const { name, time, isEditionModeEnabled, onClickRemoveButton, onExpand, onShrink } = this.props;        
        const { hideResetButton } = this.state;

        return (
            <Timer
                ref="timer"
                name={name}
                isRegressive
                startTime={time}
                disableStartPauseButton={isEditionModeEnabled}
                hideExpandButton={isEditionModeEnabled}
                onExpand={onExpand}
                onShrink={onShrink}
                onStartCounting={this.showResetButton.bind(this)}
                onReset={this.hideResetButton.bind(this)}
            >
                <WatchCommandButton
                    className="remove"
                    icon="trash"
                    title="Remove" 
                    hideButton={!isEditionModeEnabled}
                    onClick={onClickRemoveButton}
                />
                <WatchCommandButton
                    className="reset"
                    icon="reset"
                    title="Reset"
                    hideButton={hideResetButton || isEditionModeEnabled} 
                    onClick={this.resetTimer.bind(this)}
                /> 
            </Timer>
        );
    }

    showResetButton() {
        this.setState({ hideResetButton: false });
    }

    hideResetButton() {
        this.setState({ hideResetButton: true });
    }

    resetTimer() {
        this.refs.timer.getWrappedInstance().reset();
    }
}

CountdownTimer.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired,
    isEditionModeEnabled: PropTypes.bool,
    onExpand: PropTypes.func,
    onShrink: PropTypes.func,
    onClickRemoveButton: PropTypes.func
};

CountdownTimer.defaultProps = {
    name: 'Timer',
    isEditionModeEnabled: false,
    hideRemoveButton: true,
    hideResetButton: true
};