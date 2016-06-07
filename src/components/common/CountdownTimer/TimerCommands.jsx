import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StartPauseButton } from './StartPauseButton';
import { turnOnLightTheme } from './actions';

class TimerCommandsComponent extends Component {
    render() {
        const { lightTheme, disableStartPauseButton, showPause, 
                showResetButton, percentageProgress, 
                onClickStartPauseButton, onClickResetButton } = this.props;
        
        return (
            <div className="timer-commands">
                <button 
                    className={`reset -reactive ${lightTheme ? '-lightTheme' : ''} ${!showResetButton ? 'h-hidden' : ''}`} 
                    onClick={onClickResetButton}
                    title="Reset"
                >
                    <span className="icon ion-md-refresh"></span>
                </button>
                <StartPauseButton 
                    lightTheme={lightTheme}
                    disabled={disableStartPauseButton}
                    showPause={showPause}
                    percentageProgress={percentageProgress}
                    onClick={onClickStartPauseButton}
                />
                <button 
                    className={`expand -reactive ${lightTheme ? '-lightTheme' : ''}`} 
                    onClick={this.hendleClickExpandButton.bind(this)} 
                    title="Expand"
                >
                    <span className="icon ion-md-expand"></span>
                </button>
            </div>
        );
    }

    hendleClickExpandButton() {
        const { onClickExpandButton, turnOnLightTheme } = this.props;

        onClickExpandButton();
        turnOnLightTheme();
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

TimerCommandsComponent.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPause: PropTypes.bool,
    showResetButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    turnOnLightTheme: () => dispatch(turnOnLightTheme())
})

export const TimerCommands = connect(null, mapDispatchToProps)(TimerCommandsComponent);