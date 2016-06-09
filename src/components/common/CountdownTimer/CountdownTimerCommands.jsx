import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { StartPauseButton } from './StartPauseButton';
import { CountdownCommandButton } from './CountdownCommandButton';

export class CountdownTimerCommands extends BaseComponent {
    render() {
        const { lightTheme, disableStartPauseButton, showPause, 
                showResetButton, percentageProgress, 
                onClickStartPauseButton, onClickResetButton,
                onClickExpandButton } = this.props;
        
        return (
            <div className="countdown-timer-commands">
                <CountdownCommandButton
                    className="reset"
                    icon="reset"
                    title="Reset"
                    showButton={showResetButton} 
                    lightTheme={lightTheme}
                    onClick={onClickResetButton}
                /> 
                <StartPauseButton 
                    lightTheme={lightTheme}
                    disabled={disableStartPauseButton}
                    showPause={showPause}
                    percentageProgress={percentageProgress}
                    onClick={onClickStartPauseButton}
                />
                <CountdownCommandButton
                    className="expand"
                    icon="expand"
                    title="Expand"
                    lightTheme={lightTheme}
                    onClick={onClickExpandButton}
                /> 
            </div>
        );
    }

    renderCommonButtonCssClasses(buttonClass) {
        return this.classNames(
            buttonClass,
            '-reactive',
            { '-lightTheme': this.props.lightTheme }
        );
    }

    renderResetButtonCssClasses() {
        return this.classNames(
            this.renderCommonButtonCssClasses('reset'),
            { 'h-hidden': !this.props.showResetButton }
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

CountdownTimerCommands.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPause: PropTypes.bool,
    showResetButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func
};