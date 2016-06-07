import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { StartPauseButton } from './StartPauseButton';

export class TimerCommands extends BaseComponent {
    render() {
        const { lightTheme, disableStartPauseButton, showPause, 
                showResetButton, percentageProgress, 
                onClickStartPauseButton, onClickResetButton,
                onClickExpandButton } = this.props;
        
        return (
            <div className="timer-commands">
                <button 
                    className={this.renderResetButtonCssClasses()} 
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
                    className={this.renderCommonButtonCssClasses()} 
                    onClick={onClickExpandButton} 
                    title="Expand"
                >
                    <span className="icon ion-md-expand"></span>
                </button>
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

TimerCommands.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPause: PropTypes.bool,
    showResetButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func
};