import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { StartPauseButton } from './StartPauseButton';
import { CountdownCommandButton } from './CountdownCommandButton';
import { validatePercentageProgressProp } from './propValidations';

export class CountdownTimerCommands extends BaseComponent {
    render() {
        const { lightTheme, disableStartPauseButton, showPause, 
                showResetButton, percentageProgress, isEditionEnabled,
                onClickStartPauseButton, onClickResetButton,
                onClickExpandButton, onClickRemoveButton } = this.props;

        return (
            <div className="countdown-timer-commands">
                <CountdownCommandButton
                    className={this.classNames('remove', { 'h-display-none': !isEditionEnabled })}
                    icon="trash"
                    title="Remove" 
                    onClick={onClickRemoveButton}
                />
                <CountdownCommandButton
                    className={this.classNames('reset', { 'h-display-none': isEditionEnabled })}
                    icon="reset"
                    title="Reset"
                    showButton={showResetButton} 
                    lightTheme={lightTheme}
                    onClick={onClickResetButton}
                /> 
                <StartPauseButton 
                    lightTheme={lightTheme}
                    disabled={disableStartPauseButton || isEditionEnabled}
                    showPause={showPause}
                    percentageProgress={percentageProgress}
                    onClick={onClickStartPauseButton}
                />
                <CountdownCommandButton
                    className={this.classNames('expand', { 'h-display-none': lightTheme })}
                    icon="expand"
                    title="Expand"
                    showButton={!isEditionEnabled}
                    lightTheme={lightTheme}
                    onClick={onClickExpandButton}
                /> 
                <CountdownCommandButton
                    className={this.classNames('shrink', { 'h-display-none': !lightTheme })}
                    icon="compress"
                    title="Shrink"
                    lightTheme={lightTheme}
                    onClick={onClickExpandButton}
                /> 
            </div>
        );
    }
}

CountdownTimerCommands.propTypes = {
    lightTheme: PropTypes.bool,
    isEditionEnabled: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPause: PropTypes.bool,
    showResetButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func,
    onClickRemoveButton: PropTypes.func
};

CountdownTimerCommands.defaultProps = {
    lightTheme: false,
    isEditionEnabled: false,
    disableStartPauseButton: false,
    showPause: false,
    showResetButton: false
};