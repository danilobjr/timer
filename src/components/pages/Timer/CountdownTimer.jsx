import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BaseComponent } from 'BaseComponent';
import { CountdownWatch, StartPauseButton, Timer, WatchCommandButton } from 'components/common';
import { turnOnLightTheme, turnOffLightTheme } from './actions';
import { notify } from 'native';

class CountdownTimerComponent extends BaseComponent {
    constructor(props) {
        super(props);
    
        this.state = {
            hideResetButton: true
        };
    }
    
    render() {
        const { name, time, isEditionModeEnabled, isLightThemeOn,
            onClickRemoveButton } = this.props;        
        const { hideResetButton } = this.state;

        return (
            <Timer
                ref="timer"
                name={name}
                isRegressive
                startTime={time}
                disableStartPauseButton={isEditionModeEnabled}
                hideExpandButton={isEditionModeEnabled}
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
                    lightTheme={isLightThemeOn}
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

CountdownTimerComponent.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired,
    isEditionModeEnabled: PropTypes.bool,
    onClickRemoveButton: PropTypes.func
};

CountdownTimerComponent.defaultProps = {
    name: 'Timer',
    isEditionModeEnabled: false,
    hideRemoveButton: true,
    hideResetButton: true
};

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const CountdownTimer = connect(mapStateToProps)(CountdownTimerComponent);