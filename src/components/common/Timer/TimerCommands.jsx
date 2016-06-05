import React, { Component, PropTypes } from 'react';
import { StartPauseButton } from './StartPauseButton';

export class TimerCommands extends Component {
    render() {
        const { showPause, percentageProgress, 
                onClickStartPauseButton, onClickResetButton,
                onClickExpandButton } = this.props;
        
        return (
            <div className="timer-commands">
                <button className="reset" onClick={onClickResetButton}>
                    <span className="icon ion-md-refresh"></span>
                </button>
                <StartPauseButton 
                    showPause={showPause}
                    percentageProgress={percentageProgress}
                    onClick={onClickStartPauseButton}
                />
                <button className="expand" onClick={onClickExpandButton}>
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
    showPause: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func
};