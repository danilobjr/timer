import React, { Component, PropTypes } from 'react';
import { StartPauseButton } from './StartPauseButton';

export class TimerCommands extends Component {
    render() {
        const { disableStartPauseButton, showPause, 
                showResetButton, percentageProgress, 
                onClickStartPauseButton, onClickResetButton,
                onClickExpandButton } = this.props;
        
        return (
            <div className="timer-commands">
                <button 
                    className={`reset -reactive ${!showResetButton ? 'h-hidden' : ''}`} 
                    onClick={onClickResetButton}
                    title="Reset"
                >
                    <span className="icon ion-md-refresh"></span>
                </button>
                <StartPauseButton 
                    disabled={disableStartPauseButton}
                    showPause={showPause}
                    percentageProgress={percentageProgress}
                    onClick={onClickStartPauseButton}
                />
                <button className="expand -reactive" onClick={onClickExpandButton} title="Expand">
                    <span className="icon ion-md-expand"></span>
                </button>
            </div>
        );
    }
}

const validatePercentageProgressProp = (props, propName, componentName) => {
    const percentageValue = props[propName];
    
    if (percentageValue < 0 || percentageValue > 1) {
        return new Error(
            "Invalid prop '" + propName + "' supplied to" +
            " '" + componentName + "'. Validation failed. " +
            propName + " value must be between 0 and 1."
        );
    }
    
    return null;
}

TimerCommands.propTypes = {
    disableStartPauseButton: PropTypes.bool,
    showPause: PropTypes.bool,
    showResetButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func
};